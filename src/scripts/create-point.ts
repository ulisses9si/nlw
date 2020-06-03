function populateUfs(){
    const ufSelect = document.querySelector('select[name=UF]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((res) => res.json())
        .then((states) => {
            ufSelect.innerHTML += `<option value="1">Selecione a Cidade</option>`
            console.log('Criado com suscesso')
        })
}


populateUfs()



// document
//     .querySelector('select[name=UF]')
//     .addEventListener('change',() => { 
//         console.log('mudei!!!') 
//     })


