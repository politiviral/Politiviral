const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/admin", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Basic ")) {
    res.set("WWW-Authenticate", 'Basic realm="Politiviral Admin"');
    return res.status(401).send("Admin Login Required");
  }

  const credentials = Buffer.from(auth.split(" ")[1], "base64").toString();
  const [username, password] = credentials.split(":");

  if (username !== "admin" || password !== process.env.ADMIN_PASSWORD) {
    res.set("WWW-Authenticate", 'Basic realm="Politiviral Admin"');
    return res.status(401).send("Invalid Admin Login");
  }

  res.sendFile(path.join(__dirname, "admin.html"));
});

app.get("/admin.html", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Basic ")) {
    res.set("WWW-Authenticate", 'Basic realm="Politiviral Admin"');
    return res.status(401).send("Admin Login Required");
  }

  const credentials = Buffer.from(auth.split(" ")[1], "base64").toString();
  const [username, password] = credentials.split(":");

  if (username !== "admin" || password !== process.env.ADMIN_PASSWORD) {
    res.set("WWW-Authenticate", 'Basic realm="Politiviral Admin"');
    return res.status(401).send("Invalid Admin Login");
  }

  res.sendFile(path.join(__dirname, "admin.html"));
});
// Serve frontend files
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
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
