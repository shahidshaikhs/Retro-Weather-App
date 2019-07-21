const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");

let cityName = "";

const updateUI = data => {
  // Update weather UI
  details.innerHTML = `
    <h5 class="my-3">${cityName}</h5>
    <div class="my-3">${data.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${data.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;


  let timeSrc = null;
  if (data.IsDayTime) {
    timeSrc = "./img/day.png";
  } else {
    timeSrc = "./img/night.png";
  }

  time.setAttribute('src', timeSrc);

  // Display Weather Card
  if (card.classList.contains("card")) {
    card.classList.remove("d-none");
  }
};

// Get the weather response
const updateCity = async city => {
  const weatherResponse = await getWeather(city);
  return weatherResponse;
};

cityForm.addEventListener("submit", e => {
  // Prevent default form behaviour
  e.preventDefault();

  // Get city value
  cityName = cityForm.city.value.trim();
  cityForm.reset();

  // Update UI with new City
  updateCity(cityName)
    .then(data => {
      console.log(data);
      updateUI(data);
    })
    .catch(err => {
      console.log(err);
    });
});
