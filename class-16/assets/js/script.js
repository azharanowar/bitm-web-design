var submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = function() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    makeFullName( firstName, lastName );
};

function makeFullName( firstName, lastName ) {
    var fullName = firstName + ' ' + lastName;
    return document.getElementById('fullName').value = fullName;
}