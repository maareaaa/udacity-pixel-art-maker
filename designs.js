// Select color input
let color=document.getElementById('colorPicker');
//create table variable
let table=document.getElementById('pixelCanvas');

// Creates a grid using inputHeight and inputWidth
function makeGrid() {
  table.innerHTML=""; //clear old table

  for (i=0; i < document.getElementById('inputHeight').value; i++) {
    let row=table.insertRow(i); //creates rows

    for (j=0; j < document.getElementById('inputWidth').value; j++) {
      let cell=row.insertCell(j); //creates cells
      cell.addEventListener('click', colorChanger); //event listener on every cell calling the colorChanger function
    };
  };
}

//event listener for submit button, triggers makeGrid function
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    makeGrid();
  }

) //colorChanger function, toggles color of clicked cell between white and the selected color

function colorChanger(event) {
  event.preventDefault();

  if (event.target.style.backgroundColor=="") {
    event.target.style.backgroundColor=color.value;
  } else {
    event.target.style.backgroundColor="";
  };
}
