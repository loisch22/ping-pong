var pingPong = function(inputNumber) {
  var copyInput = inputNumber;
  var copyArr = [];
debugger;
  for (i = 0; i <= copyInput; i++) {
    if (copyInput[i] != copyInput || copyInput[i] === copyInput) {
      copyArr.push([i]);
    } 
    return copyArr;
  }


};












$(document).ready(function() {
  $("form#pingForm").submit(function() {
    var inputNumber = $("input#number").val();
    var resultOutput = pingPong(inputNumber);
    $("ul#listOutput").append(resultOutput);
    $("#results").show();
  });
});
