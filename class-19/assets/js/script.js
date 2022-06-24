// function myFunction() {
//     let dateTime = new Date();
//     let hours = dateTime.getHours();
//     let minutes = dateTime.getMinutes();
//     let seconds = dateTime.getSeconds();
//
//
//     document.getElementById('watch').innerHTML = hours + ':' + minutes + ':' + seconds;
// }
//
// setInterval(myFunction, 1000);



sliderImagesList = document.getElementById('sliderThumbnailList').getElementsByTagName('img');

let sliderImagesLink = [];
for ( let i = 0; i < sliderImagesList.length; i++ ) {
    sliderImagesLink[i] = sliderImagesList[i].src;
}


let i =0;
setInterval( demo, 2500);

function demo() {
    // console.log(sliderImagesLink[i]);
    document.getElementById('mainImg').src = sliderImagesLink[i];
    i++;
    if ( i >= sliderImagesLink.length ) {
        i = 0;
    }
}