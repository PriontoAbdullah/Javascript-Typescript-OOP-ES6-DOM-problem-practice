$(document).ready(function() {
    $('#span').click(function() {
        $('span').parent().css({
            'color': 'Blue',
            'border': '2px solid Green'
        });
    });

    $('#li').click(function() {
        $('span').parent().css({
            'color': 'Blue',
            'border': '2px solid Green'
        });
    });

    $('#div').click(function() {
        $('span').parentsUntil('div').css({
            'color': 'Blue',
            'border': '2px solid Green'
        });
    });

});