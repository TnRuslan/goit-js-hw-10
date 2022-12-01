import './css/styles.css';
import debounce from 'lodash.debounce';
import trim from 'lodash.trim';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { createMarkup, createMarkupForOneCountry } from './create-markup.js';

const DEBOUNCE_DELAY = 300;
const endpoint = 'https://restcountries.com/v2/name';
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

  createUrl(name)
    .then(dates => {
      addMarkupByQuantity(dates);
      countryList.innerHTML = markup;
    })
    .catch(error => {
      catchError(error);
    });
}

function createUrl(name) {
  const requetUrl = `${endpoint}/${trim(name)}?${searchParams}`;
  return fetch(requetUrl).then(response => response.json());
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

function createMarkup(dates) {
  markup = dates
    .map(
      date =>
        `<li class="country-item"><img src="${date.flags.svg}" width="30"><p>${date.name}</p></li>`
    )
    .join('');
  return markup;
}

function createMarkupForOneCountry(dates) {
  markup = dates
    .map(
      date =>
        `<li class="one-country">
      <p class="country-name">
      <img src="${date.flags.svg}" width="40">
      <span>${date.name}</span>
      </p>
      <p><span>Capital:</span> ${date.capital}</p>
      <p><span>Population:</span> ${date.population}</p>
      <p><span>Languages:</span> ${date.languages
        .map(language => {
          return language.name;
        })
        .join(', ')}</p>
      </li>`
    )
    .join('');
  return markup;
}
