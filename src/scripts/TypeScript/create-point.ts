function populateUfs(){
    const ufSelect = document.querySelector('select[name=UF]')
    

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
    let stateInput = document.querySelector('input[name=state]')
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`

    let indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    console.log(event.target.value)
    console.log(url)

    fetch(url).then(res => res.json()).then(cities => {
        for(let city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
    })

    citySelect.disabled = false

}


populateUfs()



document
    .querySelector('select[name=UF]')
    .addEventListener('change', getCities)


