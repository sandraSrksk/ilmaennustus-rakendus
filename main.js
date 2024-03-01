document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('locationInput');
    const fetchWeatherButton = document.getElementById('fetchWeather');
    const weatherData = document.getElementById('weatherData');

    fetchWeatherButton.addEventListener('click', function () {
        const location = locationInput.value;
        if (location) {
            fetchWeather(location);
        } else {
            alert('Palun sisesta asukoht');
        }
    });

    async function fetchWeather(location) {
        const apiKey = '54ba49dde9f2f347bbf4b514c8c90657';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.log('Viga ilmateate hankimisel:', error);
            alert('Ilmateate hankimisel tekkis viga. Palun proovi uuesti.');
        }
    }

    function displayWeather(data) {
        const { name, main, weather } = data;
        weatherData.innerHTML = `
            <h2>${name}</h2>
            <p>Temperatuur: ${main.temp} °C</p>
            <p>Tuule kiirus: ${data.wind.speed} m/s</p>
            <p>Ilm: ${weather[0].description}</p>
        `;
    }
});
