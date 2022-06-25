$('#submitBtn').click( function () {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    $('#fullName').val( firstName + ' ' + lastName );
});