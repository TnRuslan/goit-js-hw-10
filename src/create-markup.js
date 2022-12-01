export function createMarkup(dates) {
  markup = dates
    .map(
      date =>
        `<li class="country-item"><img src="${date.flags.svg}" width="30"><p>${date.name}</p></li>`
    )
    .join('');
  return markup;
}

export function createMarkupForOneCountry(dates) {
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
