var colorInput = $('#color-search').val();
var colorInput = '#f0f099';

$(document).ready(function() {
    $('body').css('background-color', colorInput); 
});


var colors = {
    white: 'FFFFFF',
    black: '000000',
    red: 'ff0000'
};

console.log(Object.entries(colors));
