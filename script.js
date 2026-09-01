const stories=[
  ["Politics","The stories shaping the public conversation","A clear starting point for political news, analysis and public-interest updates."],
  ["Governance","What government decisions mean for people","Turn complex announcements into concise, useful explanations."],
  ["People","Voices, reactions and the issues that matter","Highlight perspectives from citizens, communities and public figures."]
];
let campaigns=[
  {
    title:"Sabon Campaign",
    status:"upcoming",
    description:"Bayanin campaign"
  }
];
const make=items=>items.map(x=>`<article class="card"><b>${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");
document.querySelector("#stories").innerHTML=make(stories);
document.querySelector("#campaigns-list").innerHTML=make(campaigns);
document.querySelector("#year").textContent=new Date().getFullYear();
const nav=document.querySelector(".nav"),menu=document.querySelector(".menu");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
