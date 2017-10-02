//Changes via text input

$('#color-search').on('input', function () {

  //Reset field

  $('#color-description-container').html('');
  $('#color-search').removeClass('bold');
  $('html').css('background-color', 'gray'); 
  $('input').css({'color':'white','border-color':'white'});

  //Establish variables

  const input = $('#color-search').val();
  const objHex = Object.values(colors);
  const objName = Object.keys(colors);
  const colorName = '<span class="color-name"></span>';
  const textHex = '<span class="text-hex"></span>';

  function getContrast50(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black':'white';
  }

  //Match color name and HEX value of matched color in info line

  for(let i = 0; i < objHex.length; i++) {

  if(input.toUpperCase().replace(/ /g,'') === objName[i].toUpperCase().replace(/ /g,'') || input.toUpperCase().replace(/#/g,'') === objHex[i].toUpperCase().replace(/#/g,'')) {
      
    $('#color-description-container').append(`The HEX value ${colorName} is ${textHex}`);
    $('.text-hex').text(objHex[i]);
    $('.color-name').text(objName[i].replace( /([a-z])([A-Z])/g, "$1 $2").toLowerCase());
    $('#color-search').addClass('bold');
    $('html').css('background-color', objHex[i]);

    $('input, div').css('color', getContrast50(objHex[i].replace('#','')));
    $('input, div').css('border-color', getContrast50(objHex[i].replace('#','')));
    } 
  }
});
