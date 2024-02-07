var weatherImage = document.querySelector("#weatherImage");
var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#submitBtn");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var visibility = document.querySelector("#visibility");
var humidity = document.querySelector("#humidity");

var apik = 'bddc4f0c488ab110a4c5ffa95029b3cf'; 
function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description'];
            var tempreture = data['main']['temp'];
            var windspeed = data['wind']['speed'];
            var visibilityVal = data['visibility'];
            var humidityVal = data['main']['humidity'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(tempreture)} C</span>`;
            descrip.innerHTML = `Sky Condition: <span>${descripVal}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
            visibility.innerHTML = `Visibility: <span>${visibilityVal} meters</span>`;
            humidity.innerHTML = `Humidity: <span>${humidityVal}%</span>`;

            
        })
        .catch(err => alert('You entered the wrong city name'))
});
