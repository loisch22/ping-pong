var copyInput =

var pingPong = function(inputNumber) {



}












$(document).ready(function() {
  $("form#pingForm").submit(function() {
    var inputNumber = parseInt($("input#number").val());
    var resultOutput = pingPong(inputNumber);
    $("ul#listOutput").append("<li>" + resultOutput + "</li>");
    $("#results").show();
  });
});
