function myFunction() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();


    document.getElementById('watch').innerHTML = hours + ':' + minutes + ':' + seconds;
}

setInterval(myFunction, 1000);






sliderImagesList = document.getElementById('sliderThumbnailList').getElementsByTagName('img');

let sliderImagesLink = [];
for ( let i = 0; i < sliderImagesList.length; i++ ) {
    sliderImagesLink[i] = sliderImagesList[i].getAttribute('src');
}


let index = 0;


let imgOne = document.getElementById('imgOne');
imgOne.onclick = function () {
    index = 0;
    slider();
}

let imgTwo = document.getElementById('imgTwo');
imgTwo.onclick = function () {
    index = 1;
    slider()
}


let imgThree = document.getElementById('imgThree');
imgThree.onclick = function () {
    index = 2;
    slider()
}

let imgFour = document.getElementById('imgFour');
imgFour.onclick = function () {
    index = 3;
    slider()
}

let imgFive = document.getElementById('imgFive');
imgFive.onclick = function () {
    index = 4;
    slider()
}

let imgSix = document.getElementById('imgSix');
imgSix.onclick = function () {
    index = 5;
    slider()
}

let imgSeven = document.getElementById('imgSeven');
imgSeven.onclick = function () {
    index = 6;
    slider();
}

let imgEight = document.getElementById('imgEight');
imgEight.onclick = function () {
    index = 7;
    slider();
}





setInterval( slider, 2500);

function slider() {
    // console.log(sliderImagesLink[i]);
    let sliderImgLink = sliderImagesLink[index];
    document.getElementById('mainImg').setAttribute('src', sliderImgLink);
    index++;
    if ( index >= sliderImagesLink.length ) {
        index = 0;
    }
}




// Start using jQuery:

$('#heading').click( function () {
    $('#heading').css({
        'color' : 'red'
    });
});