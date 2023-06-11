const wrapper = document.querySelector(".main-section")

let  inputPart = wrapper.querySelector(".input-part")

let infoTxt = inputPart.querySelector(".info-txt")

let inputField  = inputPart.querySelector("input")

const locationBtn =  inputPart.querySelector("button")

let  wIcon = document.querySelector(".weather-part img")

const apiKey = "*********************************"

let arrowBack = wrapper.querySelector("header i")

let api

inputField.addEventListener("keyup" ,e => {
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value)
    }
})

locationBtn.addEventListener("click" ,() => {
  // if browser support geolocation api
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSucess , onError)
  }
  else{
    alert("Your browser not support geolocation api")
  }
})

function onSucess(position) {
// console.log(position);

const {latitude , longitude} = position.coords

 api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

fetchData()
}

function onError(error) {
  infoTxt.innerHTML = error.message
  infoTxt.classList.add("error")
}

function requestApi(city){
   api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  fetchData()

  // infoTxt.innerHTML = "Getting weather Details..."
  // infoTxt.classList.add("pending")

  // fetch(api).then(response => response.json()).then(result => weatherDetails(result))
}

function fetchData() {
  infoTxt.innerHTML = "Getting weather Details..."
  infoTxt.classList.add("pending")

  fetch(api).then(response => response.json()).then(result => weatherDetails(result))
}

function weatherDetails(info){
  infoTxt.classList.replace("pending" , "error")
  if(info.cod == "404"){
    infoTxt.innerHTML = `${inputField.value} isn't a valid city name`
  }
  else{
    const city = info.name
    const country = info.sys.country
    const {description , id} = info.weather[0]
    const {feels_like , humidity , temp} = info.main

    if(id == 800){
      wIcon = "./images/clear.png"
    }
   else if(id >= 200 && id <= 232){
      wIcon = "./images/storm.png"
    }
    else if(id >= 600 && id <= 622){
      wIcon = "./images/snow.png"
    }
    else if(id >= 701 && id <= 781){
      wIcon = "./images/haze.png"
    }
    else if(id >= 801 && id <= 804){
      wIcon = "./images/cloud.png"
    }
    else if((id >= 300 && id <= 321)  || (id >= 500 && id <= 531)){
      wIcon = "./images/rain.png"
    }

    wrapper.querySelector(".temp .numb").innerHTML = Math.floor(temp)
    wrapper.querySelector(".weather").innerHTML = description
    wrapper.querySelector(".location span").innerHTML = `${city} , ${country}`
    wrapper.querySelector(".temp .numb-2").innerHTML = Math.floor(feels_like)
    wrapper.querySelector(".humidity span").innerHTML = `${humidity}%`

    infoTxt.classList.remove("pending" , "error")  
    wrapper.classList.add("active")
    console.log(info);
  }

}

arrowBack.addEventListener("click" , () => {
  wrapper.classList.remove("active")
})
