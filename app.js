const container = document.getElementById('container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
   // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };   
}; 

document.addEventListener('DOMContentLoaded', function(event) {
  makeRows(16, 16);
  const gridItem = document.querySelectorAll(".grid-item");  
  gridItem.forEach(item => {
    item.addEventListener("mouseover", randomColor) 
  })
})


function addBlack (event) {
  event.target.style.backgroundColor = "black";
}

function randomColor(event) {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  var i = 0
  while (i < 10) {
  event.target.style.backgroundColor = randomColor;
  i++
} 
}

document.addEventListener('DOMContentLoaded', function(event) {
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
      changeWhite(event);
      askPrompt();
    }
  );
})


function changeWhite(event){
  const gridItem = document.querySelectorAll(".grid-item"); 
  gridItem.forEach(item => {
    item.style.backgroundColor = 'white';
  })
}

function askPrompt() {
  const userInput = prompt("What size grid do you want?")
  const userNumber = parseInt(userInput)
  if (userNumber > 100) {alert("Please choose a number less than 100")} else {
  if (userNumber != null) {
    while (container.firstChild) {
      container.removeChild(container.firstChild); 
    }
    makeRows(userNumber, userNumber) 
    const gridItem = document.querySelectorAll(".grid-item");  
    gridItem.forEach(item => {
      item.addEventListener("mouseover", randomColor) 
    })
  }
  else {
    return
    }
  }
}
