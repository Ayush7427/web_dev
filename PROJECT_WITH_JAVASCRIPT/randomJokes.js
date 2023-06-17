let jokesDisplay = document.getElementById("jokes")

const btn = document.getElementById("btn")

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,explicit&type=single"

btn.addEventListener("click" , () => {
    getJoke()
})

let getJoke = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        jokesDisplay.innerText = `${data.joke}`
    })
}
getJoke()