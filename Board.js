var table = document.getElementsByClassName('snaketable')[0];
var score = document.getElementsByClassName("score")[0];
var time = document.getElementsByClassName("time")[0];

var startTime = [];
var stopTime = [];

var size = 30; // Size of cell
var height = 10;
var width = 15;

table.setAttribute('height', height*size + 'px');
table.setAttribute('width', width*size + 'px');
table.setAttribute('cellspacing', '1px');
table.setAttribute('cellpadding', '0px');
for (var i=0; i<height; i+=1) {
	var row = table.insertRow(i);
	for (var j=0; j<width; j+=1) {
		var cell = row.insertCell(j);
		cell.setAttribute('name', j+'_'+i);
		var btn = document.createElement('button');
		btn.setAttribute('class', 'invisible');
		btn.setAttribute('onmousedown', 'placeFood('+j+','+i+')');
		btn.style.height = size+'px';
		btn.style.width = size+'px';
		cell.appendChild(btn);
	}
}

function showVictory() {
	for (var r=0; r<table.rows.length; r++) {
		for (var c=0; c<table.rows[r].cells.length; c++) {
			var cell = table.rows[r].cells[c];
			cell.setAttribute('class', 'emptycell');
		}
	}
	// W
	table.rows[2].cells[2].setAttribute('class', 'snakecell');
	table.rows[3].cells[2].setAttribute('class', 'snakecell');
	table.rows[4].cells[2].setAttribute('class', 'snakecell');
	table.rows[5].cells[2].setAttribute('class', 'snakecell');
	table.rows[6].cells[2].setAttribute('class', 'snakecell');
	table.rows[7].cells[2].setAttribute('class', 'snakecell');
	table.rows[7].cells[3].setAttribute('class', 'snakecell');
	table.rows[4].cells[4].setAttribute('class', 'snakecell');
	table.rows[5].cells[4].setAttribute('class', 'snakecell');
	table.rows[6].cells[4].setAttribute('class', 'snakecell');
	table.rows[7].cells[4].setAttribute('class', 'impactcell');
	table.rows[7].cells[5].setAttribute('class', 'snakecell');
	table.rows[2].cells[6].setAttribute('class', 'snakecell');
	table.rows[3].cells[6].setAttribute('class', 'snakecell');
	table.rows[4].cells[6].setAttribute('class', 'snakecell');
	table.rows[5].cells[6].setAttribute('class', 'snakecell');
	table.rows[6].cells[6].setAttribute('class', 'snakecell');
	table.rows[7].cells[6].setAttribute('class', 'snakecell');
	// i
	table.rows[3].cells[8].setAttribute('class', 'foodcell');
	table.rows[5].cells[8].setAttribute('class', 'snakecell');
	table.rows[6].cells[8].setAttribute('class', 'snakecell');
	table.rows[7].cells[8].setAttribute('class', 'snakecell');
	// n
	table.rows[4].cells[10].setAttribute('class', 'snakecell');
	table.rows[5].cells[10].setAttribute('class', 'snakecell');
	table.rows[6].cells[10].setAttribute('class', 'snakecell');
	table.rows[7].cells[10].setAttribute('class', 'snakecell');
	table.rows[4].cells[11].setAttribute('class', 'snakecell');
	table.rows[4].cells[12].setAttribute('class', 'snakecell');
	table.rows[5].cells[13].setAttribute('class', 'snakecell');
	table.rows[6].cells[13].setAttribute('class', 'snakecell');
	table.rows[7].cells[13].setAttribute('class', 'snakecell');
}

function updateBoard() {
	for (var r=0; r<table.rows.length; r++) {
		for (var c=0; c<table.rows[r].cells.length; c++) {
			var cell = table.rows[r].cells[c];
			if (inSnakeTwice(cell.getAttribute('name'))) {
				cell.setAttribute('class', 'impactcell');
			} else if (inSnake(cell.getAttribute('name'))) {
				cell.setAttribute('class', 'snakecell');
			} else if (cell.getAttribute('name') == food[0]+'_'+food[1]) {
				cell.setAttribute('class', 'foodcell');
			} else {
				cell.setAttribute('class', 'emptycell');
			}
			cell.setAttribute('height', size+'px');
			cell.setAttribute('width', size+'px');
		}
	}


/*
 	for (var s=0; s<snake.length; s++) {
		var cell = table.rows[snake[s][0]].cells[snake[s][1]];
		cell.setAttribute('class', 'snakecell');
	}
*/

	score.innerHTML = (snake.length - level - 3);
	var minutes, seconds, milliseconds;
	if (startTime.length === 0) { // Before stage start
		time.innerHTML = '0:00.000';
	} else if (stopTime.length === 0) { // Stage in progress
		minutes = (new Date().getMinutes() - startTime[0] + 60) % 60;
		seconds = (new Date().getSeconds() - startTime[1] + 60) % 60;
		milliseconds = (new Date().getMilliseconds() - startTime[2] + 1000) % 1000;
		time.innerHTML = formatTime([minutes, seconds, milliseconds]);
	} else { // After stage end
		minutes = (stopTime[0] - startTime[0] + 60) % 60;
		seconds = (stopTime[1] - startTime[1] + 60) % 60;
		milliseconds = (stopTime[2] - startTime[2] + 1000) % 1000;
		time.innerHTML = formatTime([minutes, seconds, milliseconds]);
	}
}

updateBoard();
