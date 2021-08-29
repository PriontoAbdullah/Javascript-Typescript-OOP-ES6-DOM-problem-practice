$(document).ready(function() {

    $('#show').click(function() {
        alert('Text: ' + $('#lorem').text());
    });


    $('#btn1').click(function() {
        $('#lorem').text('Hi');
    });

    $('#btn2').click(function() {
        $('#lorem').html('<h2> Hello</h2>');
    });

    $('#btn3').click(function() {
        $('#name').val('Enter Name Please');
    });


});