
var pingPong = function(inputNumber) {
  var copyNumber = inputNumber;
  var numberOutput = [];
debugger;
  for (i = 1; i <= copyNumber; i++) {
    if (copyNumber[i] === copyNumber) {
      numberOutput.push(i);
    } else {
      numberOutput.push(i);
    }
  };
    console.log(numberOutput);
    return numberOutput;
};












$(document).ready(function() {
  $("form#pingForm").submit(function() {
    var inputNumber = parseInt($("input#number").val());
    var resultOutput = pingPong(inputNumber);
    $("#results").show(resultOutput);
  });
});
