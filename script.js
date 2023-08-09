const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const searchButton = document.getElementById('searchButton');
const locationInput = document.getElementById('locationInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeatherData(location);
    }
});

function getWeatherData(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;

            weatherInfo.innerHTML = `
                <h2>Weather in ${name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>An error occurred. Please try again later.</p>';
        });
}
