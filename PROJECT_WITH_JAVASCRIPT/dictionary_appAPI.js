const btn = document.getElementById("btn")

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.getElementById("result")

const result1 = document.getElementById("result1")

let sound = document.getElementById("sound")


btn.addEventListener("click" , () => {
    let input = document.getElementById("inp").value
    fetch(`${url}${input}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        result.innerHTML = ` <div class="searchh">

                <p class="tab">${input}</p> 
                
                <p class="sample1">${data[0].meanings[0].partOfSpeech}${data[0].phonetic
                }</p>

            </div>

            <button class = "z" onclick="playSound()"><i class="fa-solid fa-volume-high fa-beat"></i></button>
`
result1.innerHTML = `  <p class="content">${data[0].meanings[0].definitions[0].definition}</p> 

<p class="clas">${data[0].meanings[0].definitions[0].example  || ""}</p>`
sound.setAttribute("src" , `${data[0].phonetics[0].audio} `)
// console.log(sound);
    })
    .catch(() => {
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`
    })
    
})

function playSound() {
    sound.play()
}