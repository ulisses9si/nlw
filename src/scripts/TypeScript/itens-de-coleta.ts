const itens = [ 
    'Lâmpadas',
    'Baterias',
    'Eletrônicos',
    'Óleo de Cozinha',
    'Papéis e/ou Papelão',
    'Orgânicos'
]
const url = [
    "./assets/svgs/lampadas.svg", 
    './assets/svgs/baterias.svg', 
    "./assets/svgs/eletronicos.svg",
    './assets/svgs/oleo.svg',
    './assets/svgs/papeis-papelao.svg',
   './assets/svgs/organicos.svg'
    ]

let lista = document.querySelector('#itens-coleta')

for(let i = 0; i < url.length; i++){
    lista.innerHTML += `                           
     <li data-id="${i+1}">
        <img src="${url[i]}" alt="${itens[i]}">
        <span>${itens[i]}</span>
    </li>
`
}

console.log('itens termidos')


