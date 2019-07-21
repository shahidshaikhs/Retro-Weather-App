// Insert API Key Below
const key = "bO2sLfS1q55d8f4tA8664R632CGOcQQU";

const getWeather = async city => {
  // Get City Information
  const cityResponse = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`);
  const cityData = await cityResponse.json();

  // Get Weather using City Key
  const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityData[0].Key}?apikey=${key}`);
  const weather = await weatherResponse.json();

  return weather[0];
};
