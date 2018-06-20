// Fetch Data
const colorData = [];
fetch('https://raw.githubusercontent.com/meodai/color-names/master/dist/colornames.json')
  .then(raw => raw.json())
  .then(data => colorData.push(...data));

//Check for match every keystoke in input
const input = document.querySelector('#color-search');
const results = document.querySelector('#color-description-container');

input.addEventListener('keyup', handleColors);

function handleColors(e) {

  //Reset
  input.classList.remove('bold');
  Object.assign(input.style,{color:"white",borderColor:"white"});
  results.innerHTML = '';
  document.body.style.backgroundColor = "gray";

  //Updates input variable with each run
  const inputValue = input.value;

  for (let color of colorData) {

  if (inputValue.toUpperCase().replace(/ /g,'') === color.name.toUpperCase().replace(/ /g,'') 
    || inputValue.toUpperCase().replace(/#/g,'') === color.hex.toUpperCase().replace(/#/g,'')) {
    
    input.classList.add('bold');
    results.innerHTML =
      `The HEX value <span class="bold">${color.hex}</span> 
      is <span class="bold">${color.name}</span>`;
    document.body.style.backgroundColor = color.hex;

    //Changes input and text to white or black based on optimal contrast
    
    function getContrast50(hex){
      return (parseInt(hex, 16) > 0xffffff/2) ? 'black':'white';
    }

    const inputParts = document.querySelectorAll('input, div');
    inputParts.forEach(part => part.style.color = getContrast50(color.hex.replace('#','')));
    inputParts.forEach(part => part.style.borderColor = getContrast50(color.hex.replace('#','')));

    } 
  }
}
