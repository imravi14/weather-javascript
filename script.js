const city = document.getElementById("city");
const searchbtn = document.getElementById("searchbtn");
const locationbox = document.getElementById("locationbox");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchbtn.addEventListener("click", () => {
  const apikey = "82012a2dcd81462190fb41c1ed62d8da";
  const cityname = city.value;

  if (!cityname) {
    alert("Please Enter Correct City Name");
    return;
  }

  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
  fetch(apiurl)
    .then((response) => response.json())
    .then((data) => {
      locationbox.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = `${data.main.temp}  °C`;
      description.textContent = `${data.weather[0].description}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again later.");
    });
});

// const city = document.getElementById("city");
// const searchbtn = document.getElementById("serchbtn");
// const locationbox = document.getElementById("locationbox");
// const temperature = document.getElementById("temperature");
// const description = document.getElementById("description");

// searchbtn.addEventListener("click", () => {
//   const apikey = `503e4d1ae66c6bbc358faa910761e6a0`;
//   const cityname = city.value;

//   if (!cityname) {
//     alert("pleace check error");
//     return;
//   }

//   const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
//   fetch(apiurl)
//     .then((response) => response.json())
//     .then((data) => {
//       locationbox.textContent = `${data.name} ,${data.sys.country}`;
//       temperature.textContent = `${data.main.temp} c`;
//       description.textContent = `${data.weather[0].description}`;
//     })
//     .catch((error) => {
//       alert("pleack chechk error");
//     });
// });
