$(document).ready(function() {

    $('p').on('click', function() {
        alert('Hello');
    });

    $('#name').focus(function() {
        $(this).css('background', 'red');
    });

    $('#toggle').click(function() {
        $('#p').css('background', 'black')
            .slideDown(1000)
            .slideUp(1000)
            .hide(1000);
    });

});