document.querySelector("h1").style.textAlign = "center";
container.style.width = "1000px";
container.style.height = "1000px";
container.style.margin = "auto";



const createGrid = size => {
  for (let cols = 0; cols < size; cols++) {
    for (let rows = 0; rows < size; rows++) {
      let cell = document.createElement("div");
      cell.classList = "cell";
     
      container.appendChild(cell);
      cell.style.width = `${parseInt(container.style.width) / size / 2}px`;
      cell.style.height = cell.style.width;
      cell.style.border = "1px solid black";
      cell.style.display = "inline-block";
      cell.style.verticalAlign = "top";
    }
    let nextLine = document.createElement("br");
    container.appendChild(nextLine);
  }
}

const gridSize = prompt("What gridsize would you like?", 10);
const grid = createGrid(gridSize);

const colorCell = e => {
  e.target.style.backgroundColor = "purple";
}

let cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("mouseover", colorCell));


const clearGrid = e => {
  cells.forEach(cell => cell.style.backgroundColor = "white");
}

const btn = document.createElement("button");
btn.textContent = "Reset board"
btn.setAttribute("class", "btn");
document.querySelector("h1").appendChild(btn);
btn.onclick = clearGrid;
