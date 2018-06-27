class UI{
    constructor(){
       this.location = document.getElementById("w_location");
       this.weather = document.getElementById("w_weather");
       this.degree = document.getElementById("w_degree");
       this.icon = document.getElementById("w_icon");
       this.humidity = document.getElementById("humdity");
       this.dewpoint = document.getElementById("dewpoint");
       this.feelslike = document.getElementById("feelslike");
       this.wind = document.getElementById("wind");
    }

     paint(weather){
         console.log(weather);
        this.location.textContent = weather.display_location.full;
        this.weather.textContent = weather.weather;
        this.degree.textContent = weather.temperature_string;
        this.icon.setAttribute("src", weather.icon_url);
        this.humidity.textContent = `Relative humidity : ${weather.relative_humidity}`;
        this.dewpoint.textContent = `DewPoint : ${weather.dewpoint_string}`;
        this.feelslike.textContent = `Feels Like : ${weather.feelslike_string}`;
        this.wind.textContent = `Wind : ${weather.wind_string}`;
    }
}