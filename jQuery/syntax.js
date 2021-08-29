$(document).ready(function() {

    $('#toggle').click(function() {
        $('p:first').toggle('slow');

        // click.stopPropagation();
    });

    $('#btn').click(function() {
        $(this).hide(1000, function() { // call back function
            alert('Are you sure?');
        });
    });

});