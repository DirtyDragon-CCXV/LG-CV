// # --- make knowlege dinamic ---
let skill_nav_unfilter = document.getElementsByClassName("skill_nav")[0].childNodes;
let skill_nav = [];

for (let x = 0; x < skill_nav_unfilter.length; x++) { //filter <li> elements
    const element = skill_nav_unfilter[x];
    if (element.nodeType == 1) {
        skill_nav.push(element);
    }
}

const SCROLL = window.screen.width;
const slidder = document.getElementsByClassName("slidder")[0];

function ClickToScroll(id) {
    console.log(SCROLL * id);
    slidder.scrollTo({
        top: 0,
        left: SCROLL * id,
        behavior: "smooth",
    });
}

for (let i = 0; i < skill_nav.length; i++) {
    const elem = skill_nav[i];

    if (elem.nodeType != 3) {
        console.log(elem);

        elem.addEventListener("click", () => {
            ClickToScroll(i);
        });
    };
}

// --- Add information to cards ---
const request = new XMLHttpRequest();
request.open("GET", "rsc/skills.json");
request.responseType = "json";
request.send()

request.onload = function () {
  const datos = request.response;
  console.log("data status:",200) //debug only
};