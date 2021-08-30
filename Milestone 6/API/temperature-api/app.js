const searchLocation = () => {
    const apiKey = "4db3b5072a3da56e5739c4f0daf33ba1";
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
    // Clear data
    inputField.value = "";
}

const displayWeather = (data) => {
    const weatherDiv =  document.getElementById('weather');
    // Clear data
    weatherDiv.textContent = "";
    // Display data
    const kelvinToCelcious = Math.ceil(data.main.temp - 273.15);
    const icon = data.weather[0].icon;
    // console.log(icon);
    let div = document.createElement('div');
    div.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
        <h1>${data.name}</h1>
        <h3><span>${kelvinToCelcious}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
    `
    weatherDiv.appendChild(div);

    // console.log(data);
}