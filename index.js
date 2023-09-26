const APIKey = "8bd6de77e656631e2e44d6044c96d285";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherTheme = [
    {
        img: "images/snow.png",
        backgroundTheme: "linear-gradient(#D3D3D3, #87CEFA)"
    },
    {
        img: "images/rain.png",
        backgroundTheme: "linear-gradient(white, #808080, #87CEFA)"
    },
    {
        img: "images/drizzle.png",
        backgroundTheme: "linear-gradient(#D3D3D3, #808080, #B0C4DE)"
    },
    {
        img: "images/clouds.png",
        backgroundTheme: "linear-gradient(to bottom, #D3D3D3, #D3D3D3, #1E90FF)"
    },
    {
        img: "images/clear.png",
        backgroundTheme: "linear-gradient(#00BFFF, #00BFFF)"
    },
    {
        img: "images/mist.png",
        backgroundTheme: "linear-gradient(#808080, #B0C4DE)"
    }
]
const appCenter = document.querySelector(".app-center");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperatur");
const city = document.querySelector(".city");
const humidPercentage = document.querySelector(".humid-percentage");
const windVelocity = document.querySelector(".wind-velocity");

async function checkWeather(City_){

    try{
        const response = await fetch(API_URL + City_ + `&appid=${APIKey}`);
        const data = await response.json();

        console.log(data);

        city.textContent = data.name
        temperature.textContent = Math.round(data.main.temp) + "°C"
        humidPercentage.textContent = data.main.humidity + "%";
        windVelocity.textContent = data.wind.speed + "kmph";

        const weatherCondition = data.weather[0].main;
        addWeatherTheme(weatherCondition);
    }
    catch(error){
        alert("Error: City not found!");
        throw error;
    }
}

searchButton.addEventListener("click", function(){

    let inputValue = searchInput.value.toLowerCase();
    checkWeather(inputValue);    
    searchInput.value = "";
})

function addWeatherTheme(event){

    event = event.toLowerCase();
    switch (event){
        case "snow":
            weatherImg.src = weatherTheme[0].img;
            appCenter.style.background = weatherTheme[0].backgroundTheme;
            break;
        case "rain":
            weatherImg.src = weatherTheme[1].img;
            appCenter.style.background = weatherTheme[1].backgroundTheme;
            break;
        case "drizzle":
            weatherImg.src = weatherTheme[2].img;
            appCenter.style.background = weatherTheme[2].backgroundTheme;
            break;
        case "clouds":
            weatherImg.src = weatherTheme[3].img;
            appCenter.style.background = weatherTheme[3].backgroundTheme;
            break;
        case "clear":
            weatherImg.src = weatherTheme[4].img;
            appCenter.style.background = weatherTheme[4].backgroundTheme;
            break;
        case "mist":
            weatherImg.src = weatherTheme[5].img;
            appCenter.style.background = weatherTheme[5].backgroundTheme;
    }
}