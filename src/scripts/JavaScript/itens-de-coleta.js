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
var itensToCollect = document.querySelector('#itens-coleta');
for (var i = 0; i < url.length; i++) {
    itensToCollect.innerHTML += "                           \n     <li data-id=\"" + (i + 1) + "\" class=\"\">\n        <img src=\"" + url[i] + "\" alt=\"" + itens[i] + "\">\n        <span>" + itens[i] + "</span>\n    </li>\n";
}
console.log('itens termidos');
var itensToCollectAll = document.querySelectorAll('#itens-coleta');
var handleSelectedItem = function (event) {
    var itemLi = event.target;
    //Adicionar ou remover uma classe no HTML
    itemLi.classList.toggle('selected');
    var dataId = event.target.dataset.id;
    console.log(dataId);
};
for (var _i = 0, itensToCollectAll_1 = itensToCollectAll; _i < itensToCollectAll_1.length; _i++) {
    var item = itensToCollectAll_1[_i];
    item.addEventListener('click', handleSelectedItem);
}
