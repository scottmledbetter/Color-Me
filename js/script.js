//Populate info line
const placeHolder = 'Type in a color!';

$(document).ready(function() {
    $('#color-description-container')
    .append('<i><b>Pssst!</b></i> The HEX value for <b><span class="color-name">salmon</span></b> is <b><span class="text-hex">#FF8C69</span><b>');
	$('#color-search').attr(placeHolder); 
});

//Remove placeholder when input selected

$('#color-search').focus( function() {
	$(this).removeAttr('placeholder');
});

$('#color-search').blur( function() {
	$(this).attr('placeholder', placeHolder);
});

//Changes via text input

$('#color-search').on('input', function () {

	const colorInput = $('#color-search').val();
	const objectHexValue = Object.values(colors);
	const objectColorName = Object.keys(colors);

	//Match color name and HEX value of matched color in info line
	for(i = 0; i < objectHexValue.length; i++) {

		if(colorInput.toUpperCase().replace(/ /g,'') === objectColorName[i].toUpperCase().replace(/ /g,'')) {
			const foundHexValue = objectHexValue[i];
			$('.text-hex').text(foundHexValue);
			$('.color-name').text(objectColorName[i].replace( /([a-z])([A-Z])/g, "$1 $2").toLowerCase());
		}

	}
    
	//Update BG Color with field input
	$('body').css('background-color', colorInput.replace(/ /g,'')); 

});

