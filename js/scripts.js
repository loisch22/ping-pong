
var pingPong = function(inputNumber) {
  var copyNumber = inputNumber;
  var numberOutput = [];
debugger;
  for (i = 1; i <= copyNumber; i++) {
    if (copyNumber[i] % 3 === 0) {
      numberOutput.push([i] = "ping");
    } else if (copyNumber[i] === copyNumber) {
      numberOutput.push(i);
    } else {
      numberOutput.push(i);
    }
  };
    return numberOutput.toString();
};












$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var resultOutput = pingPong(inputNumber);
    $("#results").text(resultOutput);
  });
});
