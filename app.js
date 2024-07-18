const input = document.getElementById("input");
const button = document.getElementById("btn");

const celciusTemp = document.getElementById("celcius");
const cityNameloc = document.getElementById("loc");
const date_time = document.getElementById("crntDate");
const text = document.getElementById("wethr-text");
const icon = document.getElementById("wethr-icon");
const countryName = document.getElementById("temp");

// let cityName = 'karachi'

async function fetchData(cityName) {
  try {
    const promise = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=537650cb9d644b15b87145122240203&q=${cityName}`
    );
    return await promise.json();
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", async (event) => {
  event.preventDefault();
  // console.log(event.target);
  const value = input.value.trim();
  if (value !== "") {
    // console.log(fetchData(value));
    const result = await fetchData(value);
    // console.log(result);
    let celcius = `${result.current.temp_c}`;
    let city = `${result.location.name}`;
    let date = `${result.location.localtime}`;
    let condition_text = `${result.current.condition.text}`;
    let condition_icon = `${result.current.condition.icon}`;
    let country = `${result.location.country}`;
    // console.log(country);

    celciusTemp.innerText = `${celcius}`;
    cityNameloc.innerText = `${city}`;
    date_time.innerText = `${date}`;
    text.innerText = `${condition_text}`;
    icon.src = `${condition_icon}`;
    countryName.innerText = `${country}`;
  }
});
