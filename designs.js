var colpick = document.getElementById("colorPicker"); //variab le created for the color picker element
var table = document.getElementById('pixelCanvas');  //variable created for the pixelCanvas element
var color = colorPicker.value  //variable created to help identify the color of the pixel/cell

// Identifies the color to enter into the cell
var cellcolor = function (cell) {
    cell.addEventListener('click' , function() {
        event.preventDefault();
        cell.style.backgroundColor = colorPicker.value;  // changes the color based on the color selection
    })
}


// Identifies when the size picker is submitted so that it can call function to make a grid
var sizepick = document.getElementById("sizePicker")

sizepick.addEventListener('submit', function() { //listens for the submit button to create the grid
    makeGrid()
});


// removes any existing grid, creates new grid for the pixel art, loops 
// through to create rows and columns based on the data entered into the size picker
function makeGrid () {
	while (table.firstChild) {
 		table.removeChild(table.firstChild);
 	};
    for (var h = 0; h < inputHeight.value; h++) {
        var row = table.insertRow(h)
        for (var w = 0; w<inputWidth.value; w++) {
            cell = row.insertCell(w)
            cell.addEventListener('click',cellcolor(cell)) // event listener created to identify when the color selection is clicked or changed
        }
    }
}; 

