// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!

const input = document.getElementById("state-input");
const button = document.getElementById("fetch-alerts");
const display = document.getElementById("alerts-display");
const errorDiv = document.getElementById("error-message");

button.addEventListener("click", function(){
  const state = input.value.trim().toUppercase();
  if(!state) {
    errorDiv.textContent = "Enter abbriviated name:"
    errorDiv.classList.remove("hidden");
    return;
  }
  fetchWeatherAlerts(state);
  });
  
  async function fetchWeatherAlerts(state){

    try {

       const response = await fetch(`https://api.weather.gov/alerts/active?area=${state}`);
 
        if (!response.ok){
          throw new Error ("An error occured.")
        }
         
        const data = await response.json();
        errorDiv.classList.add("hidden");
        errorDiv.textContent = "";
        display(data);
        input.value ="";

    } catch (error) {
      error.textContent = error.message;
      error.classList.remove("hidden");

    }
  }

  function displayAlerts(data){
    display.innerHTML = "";
    summary.textContent = `${data.title}: ${data.features.length}`;
    display.appendChild(summary);

    const summary = document.createElement(ul);
    data.features.forEach(function (alert){
      const li = document.createElement("li");
      li.textContent = alert.propertise.headline;
      FileList.appendChild(li);
    });
    display.appendChild(list);
  }