// var Maths = require('./../js/math.js').mathsModule;
//
// $(document).ready(function() {
//   $('#mathForm').submit(function(event){
//     event.preventDefault();
//     var number1 = parseInt($('#add1').val());
//     var number2 = parseInt($('#add2').val());
//     var sum = addition(number1, number2);
//     console.log(sum);
//     $('#solution').append("<li>" + sum + "</li>");
//   });
// });

var Calculator = require('./../js/pingpong.js').calculatorModule;


$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#mathForm').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#num1').val());
    var number2 = parseInt($('#num2').val());
    var mathType = $('input[name="mathType"]:checked').val();
    var simpleCalculator = new Calculator("hot pink");
    var result;

    if (mathType === 'Add') {
      result = simpleCalculator.addition(number1, number2);
    } else if (mathType === 'Subtract') {
      result = simpleCalculator.subtraction(number1, number2);
    } else if (mathType === 'Multiply') {
      result = simpleCalculator.multiplication(number1, number2);
    } else if (mathType === 'Divide') {
      result = simpleCalculator.division(number1, number2);
    }

    $('#mathAnswer').text(result);

    });
  });

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
