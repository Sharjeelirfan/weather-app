const input = document.getElementById("input");
const button = document.getElementById("btn");
const form = document.getElementById("form");

const celciusTemp = document.getElementById("celcius");
const cityNameloc = document.getElementById("loc");
const date_time = document.getElementById("crntDate");
const text = document.getElementById("wethr-text");
const icon = document.getElementById("wethr-icon");
const countryName = document.getElementById("temp");

async function fetchData(cityName) {
  try {
    const promise = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=c2184b199a854aa9bb094105242105&q=${cityName}&aqi=no
      `
    );
    return await promise.json();  
  } catch (error) {
    console.error(error);
  } 
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let value = input.value.trim();
  if (value !== "") {
    const result = await fetchData(value);
    // console.log(result);
    let celcius = `${result.current.temp_c}°C`;
    let city = `${result.location.name}`;
    let date = `${result.location.localtime}`;
    let condition_text = `${result.current.condition.text}`;
    // let condition_icon = `${result.current.condition.icon}`
    let country = `${result.location.country}`;
    // console.log(country);
    
    celciusTemp.innerText = `${celcius}`;
    cityNameloc.innerText = `${city}`;
    date_time.innerText = `${date}`;
    text.innerText = `${condition_text}`;
    // icon.innerText = `${condition_icon}`
    countryName.innerText = `${country}`;

    input.value = ""

  }
});
