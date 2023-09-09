const key = "f099ea98f80a8d0bf420d4b8ea30bce7"

function informations(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+"°C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icons").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
async function search(input){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    informations(dados)
}
function oneClick(){
    var input = document.querySelector(".city").value
    search(input)
}
