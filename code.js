const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const grid = document.querySelector(".grid");
let num;
let divs = [];

for(let i = 0; i < 256; i++){
  divs[i] = document.createElement("div");
  container.appendChild(divs[i]);
  divs[i].setAttribute("style", "border: solid gray 1px;");
}

grid.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  num = prompt("Enter a Number for your Grid:", 16);

  if( num > 100 || num < 0){
    alert("The number has to be between 1 and 100.\nResetting to 16x16...");

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.style.gridTemplateColumns = `repeat(${16}, auto)`;
    container.style.gridTemplateRows = `repeat(${16}, auto)`;

    for(let i = 0; i < 256; i++){
      divs[i] = document.createElement("div");
      container.appendChild(divs[i]);
      divs[i].setAttribute("style", "border: solid gray 1px;");
    }

  }
  else{
    container.style.gridTemplateColumns = `repeat(${num}, auto)`;
    container.style.gridTemplateRows = `repeat(${num}, auto)`;

    for (let i = 0; i < num*num; i++){
     divs[i] = document.createElement("div");
     container.appendChild(divs[i]);
     divs[i].setAttribute("style", "border: solid gray 1px;");
   }
  }
});

container.addEventListener("mouseover", (e) => {
  if(e.target.tagName === "DIV") { // checks if the event target is a div
    e.target.style.backgroundColor = "gray";
  }

  clear.addEventListener("click", () => {
    if(e.target.tagName === "DIV"){
      e.target.style.backgroundColor = "black";
    }
  });
});