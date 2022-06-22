// var defaultBtn = document.getElementById('defaultBtn');
// defaultBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = '';
//     divOne.style.transition = '800ms';
// }
//
// var redBtn = document.getElementById('redBtn');
// redBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'red';
//     divOne.style.transition = '800ms';
// }
//
// var greenBtn = document.getElementById('greenBtn');
// greenBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'green';
//     divOne.style.transition = '800ms';
// }
//
// var blueBtn = document.getElementById('blueBtn');
// blueBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'blue';
//     divOne.style.transition = '800ms';
// }
//
// var orangeBtn = document.getElementById('orangeBtn');
// orangeBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'orange';
//     divOne.style.transition = '800ms';
// }



var defaultBtn = document.getElementById('defaultBtn');
defaultBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'div-one';
}

var redBtn = document.getElementById('redBtn');
redBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'div-one div-one-background-red';
}

var greenBtn = document.getElementById('greenBtn');
greenBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'div-one div-one-background-green';
}

var blueBtn = document.getElementById('blueBtn');
blueBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'div-one div-one-background-blue';
}

var orangeBtn = document.getElementById('orangeBtn');
orangeBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'div-one div-one-background-orange';
}









var submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = function () {
    var startingNumber = Number( document.getElementById('startingNumber').value );
    var endingNumber = Number( document.getElementById('endingNumber').value );

    var result = '';
    for ( startingNumber; startingNumber<= endingNumber; startingNumber++) {
        result += startingNumber + ', ';
    }
    document.getElementById('result').value = result;
}
