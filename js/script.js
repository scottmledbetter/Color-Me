$('#color-search').on('input', function () {
	var colorInput = $('#color-search').val();
	console.log(colorInput);
    $('body').css('background-color', colorInput); 
});

var colors = {
    white: 'FFFFFF',
    black: '000000',
    red: 'ff0000'
};

console.log(Object.entries(colors));
