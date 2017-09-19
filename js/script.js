const placeHolder = 'Type in a color!';

$('#color-search').attr('placeholder', placeHolder);

//Remove placeholder when input selected

$('#color-search').on('focus', function() {
  $(this).removeAttr('placeholder');
});

$('#color-search').on('blur', function() {
  $(this).attr('placeholder', placeHolder);
});

//Changes via text input

$('#color-search').on('input', function () {
  
  //Reset field
  
  $('#color-description-container').html('');
  $('#color-search').removeClass('bold')
  $('body').css('background-color', 'gray'); 
  $('*').css('color', '#FFF');
  $('*').css('border-color', '#FFF');

  const colorInput = $('#color-search').val();
  const objectHexValue = Object.values(colors);
  const objectColorName = Object.keys(colors);
  const colorName = '<span class="color-name"></span>';
  const textHex = '<span class="text-hex"></span>';
  
  function getContrast50(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black':'white';
  }
  
  //Match color name and HEX value of matched color in info line

  for(i = 0; i < objectHexValue.length; i++) {

    if(colorInput.toUpperCase().replace(/ /g,'') === objectColorName[i].toUpperCase().replace(/ /g,'')
      || colorInput.toUpperCase().replace(/#/g,'') === objectHexValue[i].toUpperCase().replace(/#/g,'')) {
      
      const foundHexValue = objectHexValue[i];

      $('#color-description-container').append('The HEX value for ' + colorName + ' is ' + textHex);
      $('.text-hex').text(foundHexValue);
      $('.color-name').text(objectColorName[i].replace( /([a-z])([A-Z])/g, "$1 $2").toLowerCase());
      $('#color-search').addClass('bold');
      $('body').css('background-color', foundHexValue);

      $('*').css('color', getContrast50(foundHexValue.replace('#','')));
      $('*').css('border-color', getContrast50(foundHexValue.replace('#','')));

    } 
  }
 
});
