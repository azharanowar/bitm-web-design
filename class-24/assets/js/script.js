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
    } else {
        $('#firstNameMessage').text('First name should be 2 - 10 character, and must be a valid name!').css({ 'color' : 'red' });
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
    } else {
        $('#lastNameMessage').text('Last name should be 2 - 10 character, and must be a valid name!').css({ 'color' : 'red' });
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
    } else {
        $('#emailAddressMessage').text('Please provide a valid email address.').css({ 'color' : 'red' });
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
    } else {
        $('#passwordMessage').text('Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:\n' +
            '\n').css({ 'color' : 'red' });
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
    } else {
        $('#confirmPasswordMessage').text('Please make sure confirm password is match.').css({ 'color' : 'red' });
    }
}