var itens = [
    'Lâmpadas',
    'Baterias',
    'Eletrônicos',
    'Óleo de Cozinha',
    'Papéis e/ou Papelão',
    'Orgânicos'
];
var url = [
    "./assets/svgs/lampadas.svg",
    './assets/svgs/baterias.svg',
    "./assets/svgs/eletronicos.svg",
    './assets/svgs/oleo.svg',
    './assets/svgs/papeis-papelao.svg',
    './assets/svgs/organicos.svg'
];
var lista = document.querySelector('#itens-coleta');
for (var i = 0; i < url.length; i++) {
    lista.innerHTML += "                           \n     <li data-id=\"" + (i + 1) + "\">\n        <img src=\"" + url[i] + "\" alt=\"" + itens[i] + "\">\n        <span>" + itens[i] + "</span>\n    </li>\n";
}
console.log('itens termidos');
