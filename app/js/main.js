// Fetch Data
const colorData = [];
fetch('https://raw.githubusercontent.com/meodai/color-names/master/dist/colornames.json')
  .then(raw => raw.json())
  .then(data => colorData.push(...data));

//Changes via text input

const input = document.querySelector('#color-search');
input.addEventListener('keyup', handleColors);

function handleColors(e) {

  //Reset field
  $('#color-description-container').html('')
  $('#color-search').removeClass('bold');
  $('html').css('background-color', 'gray'); 
  $('input').css({'color':'white','border-color':'white'});

  //Establish variables
  const inputValue = $('#color-search').val();

  function getContrast50(hex){
    return (parseInt(hex, 16) > 0xffffff/2) ? 'black':'white';
  }

  //Match color name and HEX value of matched color in info line
  for(let i = 0; i < colorData.length; i++) {

  if(inputValue.toUpperCase().replace(/ /g,'') === colorData[i].name.toUpperCase().replace(/ /g,'') 
    || inputValue.toUpperCase().replace(/#/g,'') === colorData[i].hex.toUpperCase().replace(/#/g,'')) {
      
    $('#color-description-container')
      .append(`The HEX value <span class="bold">${colorData[i].hex}</span> is <span class="bold">${colorData[i].name}</span>`);
    $('.text-hex').text(colorData[i].hex);
    $('.color-name').text(colorData[i].name.replace( /([a-z])([A-Z])/g, "$1 $2").toLowerCase());
    $('#color-search').addClass('bold');
    $('html').css('background-color', colorData[i].hex);

    $('input, div').css('color', getContrast50(colorData[i].hex.replace('#','')));
    $('input, div').css('border-color', getContrast50(colorData[i].hex.replace('#','')));
    } 

  }
}
