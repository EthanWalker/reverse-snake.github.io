var body = document.body;
var html = document.documentElement;
var body = html.getElementsByTagName("body")[0];
var table = body.getElementsByTagName("table")[0];
var size = 20; // Size of cell

// Credit to http://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
width -= 100; // Make the table a little smaller so there's a valid border.
height -= 100;
width = size * Math.floor(width/size);
height = size * Math.floor(height/size);
console.log("Width: "+width, " Height: "+height);
table.setAttribute("height", height + "px");
table.setAttribute("width", width + "px");
for (var i=0; i<height; i+=size) {
	var row = document.createElement("tr");
	for (var j=0; j<width; j+=size) {
	  var cell = document.createElement("td");
	  cell.setAttribute("class", "emptycell");
	  cell.setAttribute("name", i+"_"+j);
	  row.appendChild(cell);
	}
	table.appendChild(row);
}

function updateBoard(snake) {
	rows = table.getElementsByTagName("tr");
	for (var r=0; r<rows.length; r++) {
	  var row = rows[r];
	  cells = row.getElementsByTagName("td");
	  for (var c=0; c<cells.length; c++) {
	    var cell = cells[c];
	    cell.setAttribute("class", "emptycell");
	  }
	}
	console.log(snake);
	for (s in snake) {
	  var cell = document.getElementsByName(s[0]+"_"+s[1])[0];
	  console.log(cell);
	  cell.setAttribute("class", "snakecell");
	}
}
