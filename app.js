// init weather

const ui = new UI();
const storage = new Storage();

// get save location
const storedLocation = storage.getLocationData();

const weather = new Weather(storedLocation.city, storedLocation.state);

document.addEventListener("DOMContentLoaded", getWeather);

//handle change location click
document.getElementById("w-savechnages").addEventListener("click", (e) =>{
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    weather.changeLocation(city, state);

    // set new location in local storage
    storage.setLocationData(city, state);

    //show changed location weather
    getWeather();

    // close the model
    document.getElementById("city").value = "";
    document.getElementById("state").value = ""; 
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
