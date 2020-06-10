/**
 * Parte onde cria os itens
 */

const itens = [ 
    'Lâmpadas',
    'Baterias',
    'Eletrônicos',
    'Óleo de Cozinha',
    'Papéis e/ou Papelão',
    'Orgânicos'
]
const url = [
    "./assets/lampadas.svg", 
    './assets/baterias.svg', 
    "./assets/eletronicos.svg",
    './assets/oleo.svg',
    './assets/papeis-papelao.svg',
   './assets/organicos.svg'
    ]

let itensToCollect = document.querySelector('#itens-coleta')

for(let i = 0; i < url.length; i++){
    itensToCollect.innerHTML += `                           
     <li data-id="${itens[i]}" class="">
        <img src="${url[i]}" alt="${itens[i]}">
        <span>${itens[i]}</span>
    </li>
`
}

console.log('itens terminados')

/**
 * Parte onde seleciona os itens
 */ 

const itensToCollectAll = document.querySelectorAll('#itens-coleta')

let selectedItens = []
const collectedItens = document.querySelector('input[name=itens]')

const handleSelectedItem = (event) => {
    let itemLi = event.target

    //Adicionar ou remover uma classe no HTML
    itemLi.classList.toggle('selected')
    
    let dataId = event.target.dataset.id

    console.log("ITEM ID: ", dataId)

    /**
     * Verificar se existe algum item selecionado
     * Se sim:
     * Pegar os itens selecionados
     */

    let alredySelected = selectedItens.findIndex(item => item == dataId)

    // console.log(alredySelected)

     
    if(alredySelected > -1){
        /**
         * Se estiver selecionado:
         * Tirar da seleção
         */
         let filteredItens = selectedItens.filter(item => item != dataId)
        //  console.log(filteredItens)
         selectedItens = filteredItens
     }
    else{
         /**
          * Se não estiver selecionado:
          * Adicionar á seleção
          */
        
        selectedItens.push(dataId)

     }
    
    console.log(selectedItens)

    let filteredItens = selectedItens.filter(item => item != undefined)
    console.log(filteredItens)
    selectedItens = filteredItens

    console.log(`SELECTED ITENS: ${selectedItens}`)
     
    // Atualizar o campo escondido
    collectedItens.value = selectedItens
    
}

for(let item of itensToCollectAll){
    item.addEventListener('click', handleSelectedItem)
}

