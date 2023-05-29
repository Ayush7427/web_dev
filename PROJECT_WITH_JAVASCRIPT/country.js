const btn = document.getElementById("btn")

const result = document.querySelector(".mediumSection")

const information = document.querySelector(".informationAboutCountry")

btn.addEventListener("click" , () => {
    let input = document.getElementById("input").value
    const url = `https://restcountries.com/v3.1/name/${input}?fullText=true`

   fetch(url)
   .then(response => response.json())
   .then(data => {
    console.log( data)
    
    result.innerHTML = ` <img src="${data[0].flags.svg}" alt="country" class="logo" id="countryFlag">

    <h3 class="parkash" id="countryName">${data[0].name.common}</h3>`


    information.innerHTML =
     ` <h3 class="information">Capital : <span class="Capital">${data[0].capital[0]}</span> </h3>
            <h3 class="information">Continent : <span>${data[0].continents}</span> </h3>
            <h3 class="information">Population : <span>${data[0].population}</span> </h3>
            <h3 class="information">Currency : <span>${Object.keys(data[0].currencies)} ${data[0].currencies[(Object.keys(data[0].currencies))].name}</span> </h3>
            <h3 class="information">Common Languages : <span>${Object.values(data[0].languages)}</span> </h3>`
   })
   .catch(() => {
    if(input.length == 0){
        result.innerHTML = `<h3 class="inform">The input field cannot be empty</h3>`
    }
    else{
        result.innerHTML = `<h3 class="inform">Please enter a valid country name.</h3>`
    }
   })
})