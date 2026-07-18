// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!

const input = document.getElementById("state-input");
const button = document.getElementById("fetch -alerts");
const display = document.getElementById("alert-display");
const error = document.getElementById("error-message");

button.addEventListener("click", function(){
  const state = input.ariaValueMax.trim.toUppercase();
  
});