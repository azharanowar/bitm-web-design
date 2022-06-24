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
    sliderImagesLink[i] = sliderImagesList[i].getAttribute('src');
}


let i =0;
setInterval( slider, 2500);

function slider() {
    // console.log(sliderImagesLink[i]);
    document.getElementById('mainImg').setAttribute('src', sliderImagesLink[i]);
    i++;
    if ( i >= sliderImagesLink.length ) i = 0;
}