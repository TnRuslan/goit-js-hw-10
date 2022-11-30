import './css/styles.css';
import debounce from 'lodash.debounce';
import trim from 'lodash.trim';

const DEBOUNCE_DELAY = 300;

// fetch('https://restcountries.com/v3.1/name/per')
//   .then(r => r.json())
//   .then(date => {
//     date.map(c => {
//       console.log(c.name);
//     });
//   });

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onInputValue, 500));

function onInputValue(e) {
  console.log(e.target.value);

  let name = e.target.value;
  fetchCountries(name);
}

function fetchCountries(name) {
  if (trim(name) === '') {
    return;
  }
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(r => r.json())
    .then(date => date.map(country => console.log(country.name)))
    .catch(error => console.log(error));
}
