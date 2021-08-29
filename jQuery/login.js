$(document).ready(function() {

    $('#submit').click(function() {

        var password1 = $('#pass1').val();
        var password2 = $('#pass2').val();

        if (password1 != '' && password2 != '') {
            if (password1 == password2) {
                alert('Successfully login');
            } else {
                alert('Password mismatch');
            }

        } else {
            alert('Please Enter Password');
        }

        $('.loading').load('login.html');
    });

});