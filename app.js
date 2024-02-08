const body = document.querySelector("body");
const container = body.querySelector(".container");
let newdiv = document.createElement("div");
newdiv.style.border = "1px solid black";
newdiv.classList.add("child");
const button=body.querySelector("button");

button.addEventListener('click',function(){
    let size=prompt("Enter grid size:");
    container.innerHTML='';
    for (let i = 1; i <= size**2; i++) {
        let divToAdd=newdiv.cloneNode(true);
        container.appendChild(divToAdd); 
        divToAdd.style.flexBasis=`${100/size}%`
        divToAdd.addEventListener('mouseover',function() {
            divToAdd.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        })
    }
})
