const stories = [
  {
  category: "Latest",
  title: "BREAKING: Sabon Labari na Politiviral",
  date: "4 September 2026",
  time: "8:00 PM",
  image: "latest-news.jpg",
  description: `
    <h4>🔥 Me ke faruwa?</h4>
    <p>
      Wannan shi ne sabon labari da Politiviral ke kawo wa masu karatu.
      Za a riƙa sabunta wannan sashe da sahihin bayani da zarar an samu.
    </p>

    <h4>📰 Sabon Bayani</h4>
    <p>
      Da zarar an samu sabon bayani, za a saka cikakken bayani
      tare da hoton labarin a nan.
    </p>

    <p><strong>Lokaci:</strong> 4 September 2026 • 8:00 PM</p>
  `
},
  
  {
    category: "Featured",
    title: "Mukhtar Ahmad Muhammad: Labarin Mutumin da Ya Kirkiro Politiviral",
    description:
      `<h4>Rayuwarsa da Iliminsa</h4>
      <p>Mukhtar Ahmad Muhammad an haife shi a Bauchi. Ya kammala HND a Estate Management and Valuation a Abubakar Tatari Ali Polytechnic Bauchi.</p>

      <h4>Sha'awar Bincike da Rubutu</h4>
      <p>Mukhtar yana da sha'awar bincike kan ilimi, halayyar dan Adam da al'amuran yau da kullum. Haka kuma yana rubuta littattafan Hausa da novels.</p>

      <h4>Yadda Ya Kirkiro Politiviral</h4>
      <p>Daga wannan sha'awa da burin samar da ingantaccen bayani ne ya kirkiro Politiviral, domin kawo labaran siyasa, bayanan jama'a da batutuwan da suka shafi al'umma.</p>

      <h4>Manufar Politiviral</h4>
      <p>Politiviral an tsara shi domin samar da bayanai masu amfani da saukin fahimta ga jama'a.</p>`,
    image: "markup_14498.jpg"
  },
  {
    category: "Governance",
    title: "What government decisions mean",
    description:
      "Simple explanations of policies, public services and decisions that affect everyday life."
  },
  {
    category: "People",
    title: "Voices from the community",
    description:
      "Perspectives, reactions and community issues that deserve attention."
  },
  {
    category: "Civic Life",
    title: "Your guide to civic participation",
    description:
      "Useful information about civic engagement, public discussion and staying informed."
  }
];

const campaigns = [
  {
    title: "Public Policy Watch",
    status: "Active",
    description:
      "Follow public policy discussions and understand the issues behind them."
  },
  {
    title: "Community Voices",
    status: "Upcoming",
    description:
      "A space for community perspectives, questions and public-interest conversations."
  },
  {
    title: "Civic Information Series",
    status: "Planned",
    description:
      "Short, accessible guides to help people understand civic and political information."
  }
];

const storiesBox = document.querySelector("#stories");

if (storiesBox) {
  storiesBox.innerHTML = stories
    .map(
      story => `
        <article>
  ${story.image ? `<img src="${story.image}" alt="${story.title}">` : ""}
  <small>${story.category}</small>
  <h3>${story.title}</h3>
  <p>${story.description}</p>
</article>
      `
    )
    .join("");
}

const campaignsBox = document.querySelector("#campaigns-list");

if (campaignsBox) {
  campaignsBox.innerHTML = campaigns
    .map(
      campaign => `
        <article>
          <h3>${campaign.title}</h3>
          <p>${campaign.description}</p>
          <small>${campaign.status}</small>
        </article>
      `
    )
    .join("");
}

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const nav = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");

if (nav && menu) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}
async function loadHomepageStories() {
  let allStories = [...stories];

  try {
    const response = await fetch("/api/stories");

    if (response.ok) {
      const adminStories = await response.json();

      if (Array.isArray(adminStories)) {
        allStories = [...adminStories, ...stories];
      }
    }
  } catch (error) {
    console.error("Could not load admin stories:", error);
  }

  const storiesBox = document.querySelector("#stories");

  if (storiesBox) {
    storiesBox.innerHTML = allStories
      .map(
        story => `
        <article>
          ${story.image ? `<img src="${story.image}" alt="${story.title}">` : ""}
          <small>${story.category}</small>
          <h3>${story.title}</h3>
          <p>${story.description}</p>
        </article>
        `
      )
      .join("");
  }
}

loadHomepageStories();
function setLanguage(lang) {
  const translations = {
    "Latest": "Sabbin Labarai",
    "Trending": "Abubuwan Da Suka Shahara",
    "Campaigns": "Kamfen",
    "About": "Game da Mu",
    "Advertise With Us": "Yi Talla Tare da Mu",
    "Politics,": "Siyasa,",
    "without the noise.": "ba tare da hayaniya ba.",
    "A clear home for political stories, public-interest updates, campaign information and the conversations shaping communities.":
      "Gida mai sauƙi don labaran siyasa, bayanan jama'a, bayanan kamfen da tattaunawar da ke tsara al'umma.",
    "Explore latest": "Duba Sabbin Labarai",
    "View campaigns": "Duba Kamfen",
    "Stay informed.": "Kasance cikin sani.",
    "Stay involved.": "Kasance cikin al'amuran jama'a.",
    "Public-interest focused": "Mai mayar da hankali kan amfanin jama'a",
    "Clear & accessible": "Bayani mai sauƙin fahimta",
    "AUTHOR": "MARUBUCI",
  };

  const english = {
    "Sabbin Labarai": "Latest",
    "Abubuwan Da Suka Shahara": "Trending",
    "Kamfen": "Campaigns",
    "Game da Mu": "About",
    "Yi Talla Tare da Mu": "Advertise With Us",
    "Siyasa,": "Politics,",
    "ba tare da hayaniya ba.": "without the noise.",
    "Duba Sabbin Labarai": "Explore latest",
    "Duba Kamfen": "View campaigns",
    "Kasance cikin sani.": "Stay informed.",
    "Kasance cikin al'amuran jama'a.": "Stay involved.",
    "Mai mayar da hankali kan amfanin jama'a": "Public-interest focused",
    "Bayani mai sauƙin fahimta": "Clear & accessible"
  };

  const dictionary = lang === "ha" ? translations : english;

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  const nodes = [];
  let node;

  while (node = walker.nextNode()) {
    nodes.push(node);
  }

  nodes.forEach(textNode => {
    let text = textNode.nodeValue;

    Object.keys(dictionary).forEach(key => {
      if (text.includes(key)) {
        text = text.split(key).join(dictionary[key]);
      }
    });

    textNode.nodeValue = text;
  });

  localStorage.setItem("politiviral-language", lang);
}

const savedLanguage =
  localStorage.getItem("politiviral-language") || "en";

if (savedLanguage === "ha") {
  setLanguage("ha");
}
