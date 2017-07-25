$(document).ready(function(){

var values = ["a","b","c"];
var shuffledValues = ["b","c","a"];
//createBoard();
// for i =0 to < shuffledValues.length
//   var newTile = new Tile (shuffledValue,id)


  $(".col-md-4").click(function() {
    $(this).append("X");
    var id = event.target.id;
    console.log("id= "+ id);
  });

});
