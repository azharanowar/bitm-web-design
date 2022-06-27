$(window).scroll( function () {
    let windowCurrentPosition = $(window).scrollTop();
    let navMenuPosition = $( '.menu-section' ).position();

    if ( windowCurrentPosition >= navMenuPosition.top ) {
        $( '.menu-section' ).css({
            'position'  : 'fixed',
            'top'       : 0,
            'width'     : '100%'
        })
    } else {
        $( '#navMenu' ).css({
            'position'  : 'relative',
        })
    }
});



$('#firstName').keyup( function () {
    firstNameCheck();
});

function firstNameCheck() {
    let firstName = $('#firstName').val();
    let firstNameRegEx = /^[a-z A-Z-.]{2,10}$/;
    if ( firstNameRegEx.test(firstName) ) {
        $('#firstNameMessage').text(' ');
        return true;
    } else {
        $('#firstNameMessage').text('First name should be 2 - 10 character, and must be a valid name!').css({ 'color' : 'red' });
        return false;
    }
}


$('#lastName').keyup( function () {
    lastNameCheck();
});

function lastNameCheck() {
    let lastName = $('#lastName').val();
    let lastNameRegEx = /^[a-z A-Z-.]{2,10}$/;
    if ( lastNameRegEx.test(lastName) ) {
        $('#lastNameMessage').text(' ');
        return true;
    } else {
        $('#lastNameMessage').text('Last name should be 2 - 10 character, and must be a valid name!').css({ 'color' : 'red' });
        return false;
    }
}


$('#emailAddress').keyup( function () {
    emailAddressCheck();
});

function emailAddressCheck() {
    let emailAddress = $('#emailAddress').val();
    let emailAddressRegEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$/;
    if ( emailAddressRegEx.test(emailAddress) ) {
        $('#emailAddressMessage').text(' ');
        return true;
    } else {
        $('#emailAddressMessage').text('Please provide a valid email address.').css({ 'color' : 'red' });
        return false;
    }
}

$('#password').keyup( function () {
    passwordCheck();
});

function passwordCheck() {
    let password = $('#password').val();
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if ( passwordRegEx.test(password) ) {
        $('#passwordMessage').text(' ');
        return true;
    } else {
        $('#passwordMessage').text('Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:\n' +
            '\n').css({ 'color' : 'red' });
        return false;
    }
}

$('#confirmPassword').keyup( function () {
    confirmPasswordCheck();
});

function confirmPasswordCheck() {
    let password = $('#password').val();
    let confirmPassword = $('#confirmPassword').val();
    if ( password === confirmPassword ) {
        $('#confirmPasswordMessage').text(' ');
        return true;
    } else {
        $('#confirmPasswordMessage').text('Please make sure confirm password is match.').css({ 'color' : 'red' });
        return false;
    }
}


$('#showHidePassword').click( function () {
    showPassword();
});

function showPassword() {
    let passwordType = $('#password').attr('type');
    if ( passwordType === 'password' ) {
        $('#password').attr('type', 'text');
    } else {
        $('#password').attr('type', 'password');
    }
}


$('input[name = "gender"]').click( function () {
    genderCheck();
});

function genderCheck() {
    let genderValue = $('input[name = "gender"]:checked').val();
    if ( genderValue === 'male' || genderValue === 'female' || genderValue === 'others' ) {
        $('#genderInfoMessage').text(' ');
        return true;
    } else {
        $('#genderInfoMessage').text('You most select gender info here.').css('color', 'red');
        return false;
    }
}

$('#districtName').click( function () {
    districtNameCheck();
});

function districtNameCheck() {
    let districtNameValue = $('#districtName').val();
    if ( districtNameValue === 'demo_select' ) {
        $('#districtNameMessage').text('You most select district name here.').css('color', 'red');
        return false;
    } else {
        $('#districtNameMessage').text(' ');
        return true;
    }
}

$('#userForm').submit( function () {
    if ( firstNameCheck() === true && lastNameCheck() === true && emailAddressCheck() === true && passwordCheck() === true && confirmPasswordCheck() === true && genderCheck() === true && districtNameCheck() === true ) {
        return true;
    } else {
        return false;
    }
});