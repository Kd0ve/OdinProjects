const container = document.getElementById("container");
const resize = document.getElementById("resize");
const textbox = document.getElementById('textbox');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');
const shake = document.getElementById('shake');
var size = 16;

function randomRGB() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`

}

// Create the grid
function createGrid(size) {
    container.innerHTML="";
    const cellSize = 640/size;
    for (let i = 0; i < size; i++){ // Loop to creat the rows
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.width = `${cellSize}px`;
        container.appendChild(row);
        for (let i = 0; i < size; i++){ // Loop to create the cells
            const cell = document.createElement("div")
            cell.classList.add("cell");
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            row.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if(toggleSwitch.checked){
                const randColor = randomRGB();
                cell.style.backgroundColor = randColor;
            } else {
                cell.style.backgroundColor = "black";
            }
            
        })
    })

};
createGrid(size);

// Show resize input
resize.addEventListener("click", () => {
    textbox.style.display = 'block';
    submitButton.style.display = 'block';
});

// Submit grid resize
submitButton.addEventListener("click", () => {
    const userInput = textbox.value.trim();   
    if (userInput === '') {
        output.style.display = 'block';
        output.innerText = 'Please enter something!'; // Handle empty input
    } else if (isNaN(userInput)) {
        output.style.display = 'block';
        output.innerText = 'Invalid input! Please enter a number.'; // Handle non-numeric input
    } else if (userInput > 100){
        output.style.display = 'block';
        output.innerText = 'Please keep the size to 100 or smaller.'; 
    } else {
        size = parseFloat(userInput); // Convert the input to a number
        createGrid(size);
        textbox.style.display = 'none';
        submitButton.style.display = 'none';
        output.style.display = 'none';
        textbox.value = ''; 
    }
    
});

// Remove drawn lines
shake.addEventListener("click", () => {
    createGrid(size);
})

