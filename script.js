const stories = [
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
