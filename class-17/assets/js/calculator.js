
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






// function calculator( operator ) {
//     var firstNumber = Number( document.getElementById('firstNumber').value );
//     var secondNumber = Number( document.getElementById('secondNumber').value );
//
//     switch ( operator ) {
//         case '+' :
//             document.getElementById('result').value = firstNumber + secondNumber;
//             break;
//         case '-' :
//             document.getElementById('result').value = firstNumber - secondNumber;
//             break;
//         case '*' :
//             document.getElementById('result').value = firstNumber * secondNumber;
//             break;
//         case '/' :
//             document.getElementById('result').value = firstNumber / secondNumber;
//             break;
//         case '%' :
//             document.getElementById('result').value = firstNumber % secondNumber;
//             break;
//     }
//
//
//
// }
//
// var addition = document.getElementById('addition');
// addition.onclick = function() {
//     calculator('+');
// }
//
// var subtraction = document.getElementById('subtraction');
// subtraction.onclick = function() {
//     calculator('-');
// }
//
// var multiplication = document.getElementById('multiplication');
// multiplication.onclick = function() {
//     calculator('*');
// }
//
// var division = document.getElementById('division');
// division.onclick = function() {
//     calculator('-');
// }
//
// var reminder = document.getElementById('reminder');
// reminder.onclick = function() {
//     calculator('%');
// }





var equalBtn = document.getElementById('equalBtn');
equalBtn.onclick = function () {
    var operator = document.getElementById('operator').value;
    var result = myCalculator( operator );
    document.getElementById('result').value = result;
}

function myCalculator( operator ) {
    var firstNumber = Number( document.getElementById('firstNumber').value );
    var secondNumber = Number( document.getElementById('secondNumber').value );
    switch (operator) {
        case '+' :
            var result = firstNumber + secondNumber;
            break;
        case '-' :
            var result = firstNumber - secondNumber;
            break;
        case '*' :
            var result = firstNumber * secondNumber;
            break;
        case '/' :
            var result = firstNumber / secondNumber;
            break;
        case '%' :
            var result = firstNumber % secondNumber;
            break;
    }

    return result;
}

var  addition = document.getElementById('addition');
addition.onclick = function () {
    document.getElementById('operator').value = '+';
}

var subtraction = document.getElementById('subtraction');
subtraction.onclick = function () {
    document.getElementById('operator').value = '-';
}

var multiplication = document.getElementById('multiplication');
multiplication.onclick = function () {
    document.getElementById('operator').value = '*';
}

var division = document.getElementById('division');
division.onclick = function () {
    document.getElementById('operator').value = '/';
}

var reminder = document.getElementById('reminder');
reminder.onclick = function () {
    document.getElementById('operator').value = '%';
}





