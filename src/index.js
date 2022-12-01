import './css/styles.css';
import debounce from 'lodash.debounce';
import trim from 'lodash.trim';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createMarkup, createMarkupForOneCountry } from './create-markup';

const DEBOUNCE_DELAY = 300;
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});
const countryList = document.querySelector('.country-list');
const input = document.querySelector('#search-box');
let markup = '';

input.addEventListener('input', debounce(onInputValue, DEBOUNCE_DELAY));

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

  const url = `https://restcountries.com/v2/name/${trim(name)}?${searchParams}`;

  fetch(url)
    .then(response => response.json())
    .then(dates => {
      addMarkupByQuantity(dates);
      countryList.innerHTML = markup;
    })
    .catch(error => {
      catchError(error);
    });
}

function catchError(error) {
  markup = '';
  countryList.innerHTML = '';
  Notify.failure('Oops, there is no country with that name');
  console.log(error);
}

function addMarkupByQuantity(dates) {
  let number = dates.length;
  if (number > 20) {
    markup = '';
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (dates.length > 1 && dates.length < 20) {
    markup = createMarkup(dates);
  } else {
    markup = createMarkupForOneCountry(dates);
  }
}
