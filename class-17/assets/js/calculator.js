
// var addition = document.getElementById('addition');
// addition.onclick = function () {
//     var firstNumber = Number( document.getElementById('firstNumber').value );
//     var secondNumber = Number( document.getElementById('secondNumber').value );
//     document.getElementById('result').value = firstNumber + secondNumber;
// }
//
// var subtraction = document.getElementById('subtraction');
// subtraction.onclick = function () {
//     var firstNumber = Number( document.getElementById('firstNumber').value );
//     var secondNumber = Number( document.getElementById('secondNumber').value );
//     document.getElementById('result').value = firstNumber - secondNumber;
// }
//
// var multiplication = document.getElementById('multiplication');
// multiplication.onclick = function () {
//     var firstNumber = Number( document.getElementById('firstNumber').value );
//     var secondNumber = Number( document.getElementById('secondNumber').value );
//     document.getElementById('result').value = firstNumber * secondNumber;
// }
//
// var division = document.getElementById('division');
// division.onclick = function () {
//     var firstNumber = Number( document.getElementById('firstNumber').value );
//     var secondNumber = Number( document.getElementById('secondNumber').value );
//     document.getElementById('result').value = firstNumber / secondNumber;
// }
//
// var reminder = document.getElementById('reminder');
// reminder.onclick = function () {
//     var firstNumber = Number( document.getElementById('firstNumber').value );
//     var secondNumber = Number( document.getElementById('secondNumber').value );
//     document.getElementById('result').value = firstNumber % secondNumber;
// }



var addition = document.getElementById('addition');
addition.onclick = function() {
    calculator('+');
}

var subtraction = document.getElementById('subtraction');
subtraction.onclick = function() {
    calculator('-');
}

var multiplication = document.getElementById('multiplication');
multiplication.onclick = function() {
    calculator('*');
}

var division = document.getElementById('division');
division.onclick = function() {
    calculator('-');
}

var reminder = document.getElementById('reminder');
reminder.onclick = function() {
    calculator('%');
}


function calculator( operator ) {
    var firstNumber = Number( document.getElementById('firstNumber').value );
    var secondNumber = Number( document.getElementById('secondNumber').value );

    switch ( operator ) {
        case '+' :
            document.getElementById('result').value = firstNumber + secondNumber;
            break;
        case '-' :
            document.getElementById('result').value = firstNumber - secondNumber;
            break;
        case '*' :
            document.getElementById('result').value = firstNumber * secondNumber;
            break;
        case '/' :
            document.getElementById('result').value = firstNumber / secondNumber;
            break;
        case '%' :
            document.getElementById('result').value = firstNumber % secondNumber;
            break;
    }



}

