// init weather
const weather = new Weather("Los Angeles", "CA");
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

//handle change location click
document.getElementById("w-savechnages").addEventListener("click", (e) =>{
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    weather.changeLocation(city, state);

    //show changed location weather
    getWeather();

    // close the model
    $('#locModal').modal('hide');
})

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => {
      console.log(err);
    });
}
