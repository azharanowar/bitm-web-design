let imgOne = document.getElementById('imgOne');
imgOne.onclick = function () {
    document.getElementById('mainImg').src = imgOne.src;
}

let imgTwo = document.getElementById('imgTwo');
imgTwo.onclick = function () {
    document.getElementById('mainImg').src = imgTwo.src;
}

let imgThree = document.getElementById('imgThree');
imgThree.onclick = function () {
    document.getElementById('mainImg').src = imgThree.src;
}

let imgFour = document.getElementById('imgFour');
imgFour.onclick = function () {
    document.getElementById('mainImg').src = imgFour.src;
}

let imgFive = document.getElementById('imgFive');
imgFive.onclick = function () {
    document.getElementById('mainImg').src = imgFive.src;
}

let imgSix = document.getElementById('imgSix');
imgSix.onclick = function () {
    document.getElementById('mainImg').src = imgSix.src;
}

let imgSeven = document.getElementById('imgSeven');
imgSeven.onclick = function () {
    document.getElementById('mainImg').src = imgSeven.src;
}

let imgEight = document.getElementById('imgEight');
imgEight.onclick = function () {
    document.getElementById('mainImg').src = imgEight.src;
}



// var homeBtn = document.getElementById('homeBtn');
// homeBtn.onclick = function () {
//     document.getElementById('heading').innerHTML = "This is heading one from home.";
//     document.getElementById('paragraph').innerHTML = "Home! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est inventore iste laudantium minima sapiente sequi velit voluptas! Laboriosam, sed!";
// }
//
// var aboutBtn = document.getElementById('aboutBtn');
// aboutBtn.onclick = function () {
//     document.getElementById('heading').innerHTML = "This is heading two from about.";
//     document.getElementById('paragraph').innerHTML = "About! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est inventore iste laudantium minima sapiente sequi velit voluptas! Laboriosam, sed!";
// }
//
// var contactBtn = document.getElementById('contactBtn');
// contactBtn.onclick = function () {
//     document.getElementById('heading').innerHTML = "This is heading three from contact.";
//     document.getElementById('paragraph').innerHTML = "Contact! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est inventore iste laudantium minima sapiente sequi velit voluptas! Laboriosam, sed!";
// }




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






// var defaultBtn = document.getElementById('defaultBtn');
// defaultBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.className = 'div-one';
// }
//
// var redBtn = document.getElementById('redBtn');
// redBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.className = 'div-one div-one-background-red';
// }
//
// var greenBtn = document.getElementById('greenBtn');
// greenBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.className = 'div-one div-one-background-green';
// }
//
// var blueBtn = document.getElementById('blueBtn');
// blueBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.className = 'div-one div-one-background-blue';
// }
//
// var orangeBtn = document.getElementById('orangeBtn');
// orangeBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.className = 'div-one div-one-background-orange';
// }






let submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = function () {
    let startingNumber = Number( document.getElementById('startingNumber').value );
    let endingNumber = Number( document.getElementById('endingNumber').value );

    let result = '';
    for ( startingNumber; startingNumber<= endingNumber; startingNumber++) {
        result += startingNumber + ', ';
    }
    document.getElementById('result').value = result;
}
