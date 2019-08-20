var colpick = document.getElementById("colorPicker");
var table = document.getElementById('pixelCanvas');
var color = colorPicker.value;


// Select color input
var cellcolor = function (cell) {
    cell.addEventListener('click' , function() {
        event.preventDefault();
        cell.style.backgroundColor = colorPicker.value;
    })
}


// Select size input
var sizepick = document.getElementById("sizePicker")

sizepick.addEventListener('submit', function() {
    event.preventDefault();
    makeGrid()
});


// When size is submitted by the user, call makeGrid()
function makeGrid () {
	while (table.firstChild) {
 		table.removeChild(table.firstChild);
 	};
    for (var h = 0; h < inputHeight.value; h++) {
        var row = table.insertRow(h)
        for (var w = 0; w<inputWidth.value; w++) {
            cell = row.insertCell(w)
            cell.addEventListener('click',cellcolor(cell))
        }
    }
}; 

