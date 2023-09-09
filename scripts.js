const key = "f099ea98f80a8d0bf420d4b8ea30bce7"

async function search(input){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`).then(response => response.json())
console.log(dados)
}

function oneClick(){
    var input = document.querySelector(".city").value
 
    search(input)
}
