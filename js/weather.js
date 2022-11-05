

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const API_KEY = "5c048c3b72c258be251a0ffc3d70ea73";
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const city = document.querySelector(".city");
        const weather = document.querySelector(".weather");
        
        city.innerText = `${data.name}, ${data.sys.country}`;   
        weather.innerText = `${data.weather[0].main} ${parseFloat(Math.round(data.main.temp * 10) / 10)}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

