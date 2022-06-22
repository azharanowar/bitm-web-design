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
