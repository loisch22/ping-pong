var pingPong = function(inputNumber) {
  var copyNumber = inputNumber;
  var numberOutput = [];

  for (var i = 1; i <= copyNumber; i++) {
    if (i % 15 === 0) {
      var pingPong = [i].slice();
      numberOutput.push(pingPong = '"ping-pong"');
    } else if (i % 5 === 0) {
      var pong = [i].slice();
      numberOutput.push(pong = '"pong"');
    } else if (i % 3 === 0) {
      var ping = [i].slice();
      numberOutput.push(ping = '"ping"');
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
    var inputNumber = parseInt($("input#number").val());
    var resultOutput = pingPong(inputNumber);

    if (inputNumber === '' || inputNumber === null || inputNumber === NaN || inputNumber === undefined) {
      alert("Don't forget to enter a number!");
    }

    $("#results").fadeIn();
    $("form#pingForm").hide();
    $(".list").text(resultOutput);

    $("#button").click(function() {
      $("#results").hide();
      $("form#pingForm").fadeIn();
    });
    event.preventDefault();
  });
});
