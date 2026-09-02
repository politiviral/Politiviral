const stories = [
  {
    category: "Politics",
    title: "Understanding the public conversation",
    description:
      "A clear look at political issues, public debates and the questions communities are asking."
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
