const body = document.querySelector("body");
const container = body.querySelector(".container");

let newdiv = document.createElement("div");
newdiv.style.border = "1px solid black";
newdiv.classList.add("child");

for (let i = 1; i <= 16; i++) {
    container.appendChild(newdiv.cloneNode(true)); // Append a clone of newdiv
}
