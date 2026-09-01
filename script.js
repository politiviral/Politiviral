</> JavaScript 
const stories = [
  ["Politics", "The stories shaping the public conversation."],
  ["Governance", "What government decisions mean for communities."],
  ["People", "Voices, reactions and the issues that matter."]
];

let campaigns = [
  {
    title: "Sabon Campaign",
    status: "upcoming",
    description: "Bayanin campaign"
  }
];

const make = items =>
  items.map(x => `
    <article>
      <h3>${x[0]}</h3>
      <p>${x[1]}</p>
    </article>
  `).join("");

const storiesBox = document.querySelector("#stories");
if (storiesBox) {
  storiesBox.innerHTML = make(stories);
}

const campaignsBox = document.querySelector("#campaigns-list");
if (campaignsBox) {
  campaignsBox.innerHTML = campaigns.map(x => `
    <article>
      <h3>${x.title}</h3>
      <p>${x.description}</p>
      <small>${x.status}</small>
    </article>
  `).join("");
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
