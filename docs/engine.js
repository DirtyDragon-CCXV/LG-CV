/*
 * ==============================================================================
 * FILE NAME : engine.js
 * MADE BY : DirtyDragon-CCXV
 * CREATION_DATE : 11-28-2025
 * VERSION : JavaScript - ES6 (ES2015)
 * ------------------------------------------------------------------------------
 * DESCRIPTION: 
 * Main file of functionalities for "LG-CV" github, this file add
 * functionalities to touch scroll and add data to HTML elements.
 * ------------------------------------------------------------------------------
 * LICENSE : MIT
 * GITHUB REPOSITORY : https://github.com/DirtyDragon-CCXV/LG-CV
 * ==============================================================================
 */

// --- dark mode change colors ---
const SWITCH_MODE = document.getElementById("darkmode");

const HEADER = document.getElementById("top");
const STUDIES = document.getElementById("studies");
const KNOWLEDGE = document.getElementById("knowledge");
const SVG = document.getElementsByTagName("svg");
const LANGUAGES_CUAD_BOX = document.getElementsByClassName("cuad_box");
const FOOTER = document.getElementsByTagName("footer")[0];
const ICONS = document.getElementsByClassName("icon");
const LINKEDIN_ICON = document.getElementsByClassName("linkedin_icon")[0];
const LINKEDIN_QR = document.getElementsByClassName("linkedin_qr")[0];

// darkmode position
window.addEventListener("load", () => {
    SWITCH_MODE.style.top = HEADER.offsetHeight + 20 + "px";
});

let flag_mode = 0; // 0 to light, 1 to dark

if (screen.width >= 1000) {
    var mouserInHover = SWITCH_MODE.addEventListener("mouseenter", () => {
        SWITCH_MODE.style.backgroundColor = "#323c72";
        SWITCH_MODE.style.borderColor = "#111";
    });

    var mouseOutHover = SWITCH_MODE.addEventListener("mouseleave", () => {
        SWITCH_MODE.style.backgroundColor = "#669";
        SWITCH_MODE.style.borderColor = "#336";
    });
}

SWITCH_MODE.addEventListener("click", () => {
    if (flag_mode == 0) {
        SWITCH_MODE.children[1].removeAttribute("hidden");
        SWITCH_MODE.children[0].setAttribute("hidden", "true");
        SWITCH_MODE.style.backgroundColor = "#e8e8c7";
        SWITCH_MODE.style.borderColor = "#c4bf5c";
        SWITCH_MODE.style.color = "black";
        SWITCH_MODE.removeEventListener("mouseenter", mouserInHover);
        SWITCH_MODE.removeEventListener("mouseleave", mouseOutHover);

        HEADER.style.background = "linear-gradient(145deg, #222 0%, #666 50%, #222 100%)";
        HEADER.style.backgroundSize = "200% 200%";
        HEADER.children[1].style.filter = "brightness(85%)";

        STUDIES.style.backgroundColor = "#0a0a0a";
        STUDIES.style.color = "#eee";

        KNOWLEDGE.style.backgroundColor = "#0a0a0a";
        KNOWLEDGE.children[0].style.color = "#eee";
        KNOWLEDGE.children[0].style.borderColor = "#eee";
        KNOWLEDGE.style.filter = "brightness(80%)";

        FOOTER.style.backgroundColor = "#0a0a0a";
        FOOTER.style.color = "#eee";

        LINKEDIN_ICON.children[1].style.backgroundColor = "#eee";
        LINKEDIN_ICON.children[1].style.color = "black";

        LINKEDIN_QR.style.borderColor = "#444";
        LINKEDIN_QR.style.filter = "invert(100%)";

        // SVG loop and use too Flags images
        for (let i = 0; i < SVG.length; i++) {
            const element_svgs = SVG[i];
            const element_cuadBox = LANGUAGES_CUAD_BOX[i];

            element_svgs.style.fill = "#eee";
            element_cuadBox.children[0].style.filter = "brightness(85%)";
        };

        // Icons loop
        for (let t = 0; t < ICONS.length; t++) {
            const element = ICONS[t];
            element.style.filter = "invert(100%)";

        };

        if (screen.width >= 1000) {
            mouserInHover = SWITCH_MODE.addEventListener("mouseenter", () => {
                SWITCH_MODE.style.backgroundColor = "#d6d682";
                SWITCH_MODE.style.borderColor = "#c6be23";
            });

            mouseOutHover = SWITCH_MODE.addEventListener("mouseleave", () => {
                SWITCH_MODE.style.backgroundColor = "#e8e8c7";
                SWITCH_MODE.style.borderColor = "#c4bf5c";
            });
        }
        flag_mode = 1;
    } else {
        SWITCH_MODE.children[0].removeAttribute("hidden");
        SWITCH_MODE.children[1].setAttribute("hidden", "true");
        SWITCH_MODE.style.backgroundColor = "#669";
        SWITCH_MODE.style.borderColor = "#336";
        SWITCH_MODE.style.color = "#eee";
        SWITCH_MODE.removeEventListener("mouseenter", mouserInHover);
        SWITCH_MODE.removeEventListener("mouseleave", mouseOutHover);

        HEADER.style.background = "linear-gradient(145deg, #969696 0%, #bdbdbd 50%, #969696 100%)";
        HEADER.style.backgroundSize = "200% 200%";
        HEADER.children[1].style.filter = "";

        STUDIES.style.backgroundColor = "#eee";
        STUDIES.style.color = "black";

        KNOWLEDGE.style.backgroundColor = "#eee";
        KNOWLEDGE.children[0].style.color = "black";
        KNOWLEDGE.children[0].style.borderColor = "black";
        KNOWLEDGE.style.filter = "";

        FOOTER.style.backgroundColor = "#eee";
        FOOTER.style.color = "black";

        LINKEDIN_ICON.children[1].style.backgroundColor = "black";
        LINKEDIN_ICON.children[1].style.color = "#eee";

        LINKEDIN_QR.style.borderColor = "black";
        LINKEDIN_QR.style.filter = "";

        // SVG loop and use too Flags images
        for (let i = 0; i < SVG.length; i++) {
            const element = SVG[i];
            const element_cuadBox = LANGUAGES_CUAD_BOX[i];
            
            element.style.fill = "black";
            element_cuadBox.children[0].style.filter = "";

        };

        // Icons loop
        for (let t = 0; t < ICONS.length; t++) {
            const element = ICONS[t];
            element.style.filter = "invert(0%)";
        };

        if (screen.width >= 1000) {
            mouserInHover = SWITCH_MODE.addEventListener("mouseenter", () => {
                SWITCH_MODE.style.backgroundColor = "#323c72";
                SWITCH_MODE.style.borderColor = "#111";
            });

            mouseOutHover = SWITCH_MODE.addEventListener("mouseleave", () => {
                SWITCH_MODE.style.backgroundColor = "#669";
                SWITCH_MODE.style.borderColor = "#336";
            });
        }
        flag_mode = 0;
    }
});

const TEXT_CONTAINERS = document.getElementsByClassName("text_container");

// --- SVG config
for (let i = 0; i < SVG.length; i++) {
    const element_svg = SVG[i];
    const element_container = TEXT_CONTAINERS[i];
    
    console.log(element_svg);
    console.log(element_container);
    
    let px = 0;

    px = element_container.children[0].clientHeight * element_container.children.length;

    element_svg.setAttribute("height", px);
    
}


// --- make knowlege scrolled with touch nav bar ---
const SKILLL_NAV = document.getElementsByClassName("skill_nav")[0].children;
const SCROLL_WIDTH = window.screen.width;
const SLIDDER = document.getElementsByClassName("slidder")[0];

function ClickToScroll(id) {
    SLIDDER.scrollTo({
        top: 0,
        left: SCROLL_WIDTH * id,
        behavior: "smooth",
    });
}

for (let i = 0; i < SKILLL_NAV.length; i++) {
    const elem = SKILLL_NAV[i];

    elem.addEventListener("click", () => {
        ClickToScroll(i);
    });
}

// --- Add information to cards ---
const request = new XMLHttpRequest(); //get data from JSON
request.open("GET", "rsc/skills.json");
request.responseType = "json";
request.send();

request.onload = function () {
    const DATOS = request.response;
    const KEYS_DATOS = Object.keys(DATOS);

    let slidder_sons = SLIDDER.children;
    let classes = ["topics", "works"]

    for (let i = 0; i < slidder_sons.length; i++) { //loop for sections
        const CHILD = slidder_sons[i];

        for (let p = 0; p < classes.length; p++) { //loop for clases [topics|works]
            const BOX_CLASS = classes[p];

            // get div "list-desing"
            let box = CHILD.getElementsByClassName(BOX_CLASS)[0];

            // make exception for second card
            if (BOX_CLASS != "works") {
                //create the title h3 element
                let h3 = document.createElement("h3");
                h3.innerText = KEYS_DATOS[i];
                box.appendChild(h3);
            }

            if (p == 1 && DATOS[KEYS_DATOS[i]][p].length == 0) {
                let element_li = document.createElement("li");
                element_li.innerText = "Ninguno...  de momento..."
                box.appendChild(element_li);

            } else {
                // add the sub data
                for (let b = 0; b < DATOS[KEYS_DATOS[i]][p].length; b++) { //loop for create each <li>
                    const LI = DATOS[KEYS_DATOS[i]][p][b]; // DATO [ array_with_keys[iterator_of_section] ] [iterator_topics/work] [iterator_to_get_data]

                    let element_li = document.createElement("li");
                    element_li.innerText = LI;
                    box.appendChild(element_li);
                }
            }
        }

    }
};