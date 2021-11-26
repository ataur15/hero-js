const searchLocation = () => {
    const apiKey = `4db3b5072a3da56e5739c4f0daf33ba1`;
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
    // Clear data
    inputField.value = "";
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayWeather = (data) => {
    setInnerText('city', data.name);
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);

    // console.log(data);
}