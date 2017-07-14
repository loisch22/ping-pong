var pingPong = function(inputNumber) {
  var copyInput = inputNumber;

  for (var i = 1; i <= inputNumber; i++) {

  }


};












$(document).ready(function() {
  $("form#pingForm").submit(function() {
    var inputNumber = $("input#number").val();
    var resultOutput = pingPong(inputNumber);
    $("ul#listOutput").append("<li>" + resultOutput + "</li>");
    $("#results").show();
  });
});
