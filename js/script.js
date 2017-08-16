//Update BG Color with field input


$('#color-search').on('input', function () {
	var colorInput = $('#color-search').val();
    $('body').css('background-color', colorInput); 
});

//Toggle placeholder with focus

var placeHolder = 'Type in a color!';

$('#color-search').attr('placeholder', placeHolder);

$('#color-search').focus( function() {
	$(this).removeAttr('placeholder');
});

$('#color-search').blur( function() {
	$(this).attr('placeholder', placeHolder);
});

//Result display Hex or Name based on input

$(document).ready(function() {
    $('#color-description-container')
    .append('<i><b>Pssst!</b></i> The HEX value for Salmon is <span class="textHex">FF8C69</span>');
});

$('#color-search').on('input', function () {

	 var colorInput = $('#color-search').val();
	 var objectHexValue = Object.values(colors);
	 var objectColorName = Object.keys(colors);
	 var foundHexValue;

	 for(i = 0; i < objectHexValue.length; i++) {

	 	if(colorInput.toUpperCase() === objectColorName[i].toUpperCase()) {
			var foundHexValue = objectHexValue[i];
			$('.textHex').text(foundHexValue);
		}

	 }

});
