"use strict"

var remove = document.getElementById("remove_GreekOmelette")
var add = document.getElementById("add_GreekOmelette")
const cart = document.getElementById("cart");
const meeps = document.getElementById("meep");

cart.addEventListener("click", meep);

var count = 1;

function meep() {
    if (count == 1) {
        meeps.style.display = "block";
        count = 0;
    }
    else {
        meeps.style.display = "none";
        count = 1;
    }
}

add.addEventListener("click", adds);
remove.addEventListener("click", removes);


function adds() {
        meeps.innerHTML += "<p>hello</p>";
}

function removes() {

    meeps.innerHTML = "";

}