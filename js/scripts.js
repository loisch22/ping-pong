
var pingPong = function(inputNumber) {
  var copyNumber = inputNumber;
  var numberOutput = [];
debugger;
  for (var i = 1; i <= copyNumber; i++) {
    if (i % 3 === 0) {
      var ping = [i].slice();
      numberOutput.push(ping = '"ping"');
    } else if (i % 5 === 0) {
      var pong = [i].slice();
      numberOutput.push(pong = '"pong"'); 
    } else if (copyNumber[i] === copyNumber) {
      numberOutput.push(i);
    } else {
      numberOutput.push(i);
    }
  };
    return numberOutput;
};












$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var resultOutput = pingPong(inputNumber);
    $("#results").text(resultOutput);
  });
});
