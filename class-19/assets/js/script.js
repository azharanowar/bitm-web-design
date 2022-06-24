function myFunction() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();


    document.getElementById('watch').innerHTML = hours + ':' + minutes + ':' + seconds;
}

setInterval(myFunction, 1000);
// setTimeout();