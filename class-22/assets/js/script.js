// $('#submitBtn').click( function () {
//     let firstName = $('#firstName').val();
//     let lastName = $('#lastName').val();
//     $('#fullName').val( firstName + ' ' + lastName );
// });




$( '#firstName' ).keyup( function () {
    let firstName = $( '#firstName' ).val();
    $( '#result1' ).text( firstName );
});

$( '#lastName' ).keyup( function () {
    let lastName = $( '#lastName' ).val();
    $( '#result2' ).text( lastName );
});

$( '#lastName' ).blur( function () {
    let firstName = $( '#firstName' ).val();
    let lastName = $( '#lastName' ).val();
    $( '#result3' ).text( firstName + ' ' + lastName );
});




let firstContentDivScrollPosition = 0;
$( '#contentDiv' ).scroll( function () {
    let contentDivScrollPosition = $('#contentDiv').scrollTop();

    if ( contentDivScrollPosition > firstContentDivScrollPosition ) {
        $( '#overflowResult' ).text('You are scrolling down!');
    } else {
        $( '#overflowResult' ).text('You are scrolling Up!');
    }
    firstContentDivScrollPosition = contentDivScrollPosition;

});




// Html Element Position Check:
// let overflowResultPosition = $('.output-table').position();
// console.log(overflowResultPosition);

$(window).scroll( function () {
    let windowScrollPosition = $(window).scrollTop();
    let fixedMenuBoxPosition = $( '#fixedMenuBox' ).position();
    if (windowScrollPosition >= fixedMenuBoxPosition.top ) {
        $( '#fixedMenuBox' ).css( {
            'position' : 'fixed',
            'top'      : 0,
        } );
    }
});