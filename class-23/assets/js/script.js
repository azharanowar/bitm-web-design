$(window).scroll( function () {
    let windowCurrentPosition = $(window).scrollTop();
    let navMenuPosition = $( '.menu-section' ).position();

    if ( windowCurrentPosition >= navMenuPosition.top ) {
        $( '#navMenu' ).css({
            'position'  : 'fixed',
            'top'       : 0,
        })
    } else {
        $( '#navMenu' ).css({
            'position'  : 'relative'
        })
    }
});