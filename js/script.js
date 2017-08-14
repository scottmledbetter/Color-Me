//Update BG Color with field input

$('#color-search').on('input', function () {
	var colorInput = $('#color-search').val();
	console.log(colorInput);
    $('body').css('background-color', colorInput); 
});

//Toggle placeholder with focus//

var placeHolder = 'Type in a color!';

$('#color-search').attr('placeholder', placeHolder);

$('#color-search').focus( function() {
	$(this).removeAttr('placeholder');
});

$('#color-search').blur( function() {
	$(this).attr('placeholder', placeHolder);
});

//Starting on color value object

var colors = {
    white: 'FFFFFF',
    black: '000000',
    red: 'ff0000'
};

console.log(Object.entries(colors));
