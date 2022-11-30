import './css/styles.css';
import debounce from 'lodash.debounce';
import trim from 'lodash.trim';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const countryList = document.querySelector('.country-list');
const input = document.querySelector('#search-box');

let markup = '';

input.addEventListener('input', debounce(onInputValue, 500));

function onInputValue(e) {
  let name = e.target.value;
  fetchCountries(name);
}

function fetchCountries(name) {
  if (trim(name) === '') {
    markup = '';
    countryList.innerHTML = '';
    return;
  }

  const options = {};

  fetch(
    `https://restcountries.com/v2/name/${trim(
      name
    )}?fields=name,capital,population,flags,languages`
  )
    .then(r => r.json())
    .then(dates =>
      countryList.insertAdjacentHTML('beforeend', createMarkup(dates))
    )
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}

function createMarkup(dates) {
  markup = dates
    .map(
      date =>
        `<li class="country-item"><img src="${date.flags.svg}" width="30"><p>${date.name}</p></li>`
    )
    .join('');
  return markup;
}
