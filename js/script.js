//Update BG Color with field input

$('#color-search').on('input', function () {
	const colorInput = $('#color-search').val();
    $('body').css('background-color', colorInput); 
});

//Toggle placeholder with focus

const placeHolder = 'Type in a color!';

$('#color-search').focus( function() {
	$(this).removeAttr('placeholder');
});

$('#color-search').blur( function() {
	$(this).attr('placeholder', placeHolder);
});

//Populate info line

$(document).ready(function() {
    $('#color-description-container')
    .append('<i><b>Pssst!</b></i> The HEX value for Salmon is <span class="textHex">FF8C69</span>');
});

//Result display Hex or Name based on input

$('#color-search').on('input', function () {

	 const colorInput = $('#color-search').val();
	 const objectHexValue = Object.values(colors);
	 const objectColorName = Object.keys(colors);

	 for(i = 0; i < objectHexValue.length; i++) {

	 	if(colorInput.toUpperCase() === objectColorName[i].toUpperCase()) {
			const foundHexValue = objectHexValue[i];
			$('.textHex').text(foundHexValue);
		}

	 }

});
