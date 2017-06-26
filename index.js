const request = require('request');
const argv = require('yargs').argv;

const apiKey = 'cf3ea469776d88ce06a70c7846da0050';
const url = 'http://api.openweathermap.org/data/2.5/weather';
let city = argv.city || 'Cincinnati';
let query = url + `?q=${city}&units=imperial&appid=${apiKey}`;

request(query, (error, response, body) => {
  let weather, message;

  if (error) return console.log('error: %s', error);
  weather = JSON.parse(body);
  message = `It's ${weather.main.temp}º in ${weather.name}!`;
  console.log(message);
});
