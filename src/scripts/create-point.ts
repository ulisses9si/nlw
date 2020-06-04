function populateUfs(){
    const ufSelect = document.querySelector('select[name=UF]')
    const stateInput = document.querySelector('input[name=state]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((res) => res.json())
        .then((states) => {
            for(let state of states){
               ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
            console.log('Criado com suscesso')
        })
}

function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const cityInput = document.querySelector('input[name=city]')
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`


    console.log(event.target.value)
    console.log(url)

    fetch(url).then(res => res.json()).then(cities => {
        for(let city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
    })

    // citySelect.disabled = false

}


populateUfs()



document
    .querySelector('select[name=UF]')
    .addEventListener('change', getCities)


