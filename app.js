// init weather
const weather = new Weather("Los Angeles", "CA");
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

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
