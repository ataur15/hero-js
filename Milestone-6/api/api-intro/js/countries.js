const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        let div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h2>Country: ${country.name}<h2>
            <h4>Capital: ${country.capital}</h4>
            <button onclick="loadCountryDetail('${country.name}')">Detail</button>
        `
        countriesDiv.appendChild(div);
        // console.log(country);
    });
}

const loadCountryDetail = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = (country) => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h3>Country: ${country.name}</h3>
        <p>Region: ${country.region}</p>
        <img width="150px" src="${country.flag}">
    `
}