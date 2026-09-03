const stories = [
  {
  category: "Featured",
title: "Mukhtar Ahmad Muhammad: Labarin Mutumin da Ya Ƙirƙiri Politiviral",
description:
  "Mukhtar Ahmad Muhammad an haife shi a Bauchi. Ya kammala HND a Estate Management and Valuation a Abubakar Tatari Ali Polytechnic Bauchi. Yana da sha'awar bincike kan ilimi, halayyar ɗan Adam da al'amuran yau da kullum. Haka kuma yana rubuta littattafan Hausa da novels. Daga wannan sha'awa da burin samar da ingantaccen wuri na bayanai ne ya ƙirƙiri Politiviral — dandalin da ke kawo labaran siyasa, bayanan jama'a, batutuwan al'umma da sauran abubuwan da suka shafi rayuwar jama'a.",
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
