/*
 * ==============================================================================
 * FILE NAME : engine.js
 * MADE BY : DirtyDragon-CCXV
 * CREATION_DATE : 2025-11-28
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



// # --- make knowlege scrolled with touch nav bar ---
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
    }
    );
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

            // add the sub data
            for (let b = 0; b < DATOS[KEYS_DATOS[i]][p].length; b++) { //loop for create each <li>
                const LI = DATOS[KEYS_DATOS[i]][p][b]; // DATOS [ array_with_keys[iterator_of_section] ] [iterator_topics/work] [iterator_to_get_data]

                let element_li = document.createElement("li");
                element_li.innerText = LI;

                box.appendChild(element_li);
            }
        }

    }
};