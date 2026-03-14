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

let navbar_status = 0; //0 to closed, 1 to open
let navbar_trigger = document.getElementsByClassName("navbar_trigger")[0];
let navbar = document.getElementsByTagName("nav")[0];

let navbar_links = navbar.children;
let ids = ["main", "studies", "lab_exp", "languages", "mind", "contact"]
let scroll_elements = []

for (let z = 0; z < ids.length; z++) {
    const element = ids[z];

    scroll_elements.push(document.getElementById(element));
}

console.log(scroll_elements)

function navbar_action() {
    if (navbar_status == 0) {
        navbar_status = 1;

        navbar_trigger.textContent = "«";
        navbar_trigger.style.left = "97.5%";

        navbar.style.left = 0;
    } else {
        navbar_status = 0;

        navbar_trigger.textContent = "»";
        navbar_trigger.style.left = "0%";

        navbar.style.left = "-430px";
    }
}

navbar_trigger.addEventListener("click", navbar_action);

for (let i = 0; i < navbar_links.length; i++) {
    const n = navbar_links[i];

    console.log(n)

    n.addEventListener("click", () => {
        scroll_elements[i].scrollIntoView()
        navbar_action()
    })
    
}