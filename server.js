const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function adminAuth(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Basic ")) {
    res.set("WWW-Authenticate", 'Basic realm="Politiviral Admin"');
    return res.status(401).send("Admin Login Required");
  }

  const credentials = Buffer.from(
    auth.split(" ")[1],
    "base64"
  ).toString();

  const [username, password] = credentials.split(":");

  if (
    username !== "admin" ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    res.set("WWW-Authenticate", 'Basic realm="Politiviral Admin"');
    return res.status(401).send("Invalid Admin Login");
  }

  next();
}

app.get("/admin", adminAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.get("/admin.html", adminAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.get("/stories-admin.html", adminAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "stories-admin.html"));
});

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const storiesFile = path.join(__dirname, "stories.json");

function getStories() {
  if (!fs.existsSync(storiesFile)) {
    return [];
  }

  try {
    return JSON.parse(fs.readFileSync(storiesFile, "utf8"));
  } catch {
    return [];
  }
}

app.get("/api/stories", (req, res) => {
  res.json(getStories());
});

app.post("/api/stories", adminAuth, (req, res) => {
  const { title, category, description, image } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Title and description are required."
    });
  }

  const stories = getStories();

  const newStory = {
    id: Date.now(),
    title,
    category: category || "General",
    description,
    image: image || ""
  };

  stories.push(newStory);

  fs.writeFileSync(
    storiesFile,
    JSON.stringify(stories, null, 2)
  );

  res.json({
    success: true,
    story: newStory
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "POLITIVIRAL server is running"
  });
});

app.listen(PORT, () => {
  console.log(`POLITIVIRAL running on port ${PORT}`);
});
