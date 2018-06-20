/* ok so here we have that takes two arguments which will eventualy represent
columns. Then within the function we generate and array called 'arr' which has
'col' number of empty elements
*/
function make2Darray (cols, rows) {
  var arr = new Array(cols);

   for (var i = 0; i < cols; i++) {
      arr[i] = new Array(rows);
   }
  return arr;
}

var grid;
var cols;
var rows;
var resolution = 40;
function setup() {
  grid = make2Darray (cols, rows);
  cols = 40;
  rows = 40;
  var next = make2Darray(cols, rows);
  grid = next;
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
       grid[i][j] = Math.floor(Math.random()*2);
    }
  }

}
function draw() {
  background(0);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
    }
  }
}
