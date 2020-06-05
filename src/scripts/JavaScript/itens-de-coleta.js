/**
 * Parte onde cria os itens
 */
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
/**
 * Parte onde seleciona os itens
 */
var itensToCollectAll = document.querySelectorAll('#itens-coleta');
var selectedItens = [];
var handleSelectedItem = function (event) {
    var itemLi = event.target;
    //Adicionar ou remover uma classe no HTML
    itemLi.classList.toggle('selected');
    var dataId = event.target.dataset.id;
    console.log(dataId);
    /**
     * Verificar se existe algum item selecionado
     * Se sim:
     * Pegar os itens selecionados
     */
    var alredySelected = selectedItens.findIndex(function (item) { return item == dataId ? true : false; });
    console.log(alredySelected);
    if (alredySelected > -1) {
        /**
         * Se estiver selecionado:
         * Tirar da seleção
         */
        var filteredItens = selectedItens.filter(function (item) { return item != dataId ? false : true; });
        console.log(filteredItens);
        selectedItens = filteredItens;
    }
    else {
        /**
         * Se não estiver selecionado:
         * Adicionar á seleção
         */
        selectedItens.push(dataId);
    }
    console.log(selectedItens);
    // Atualizar o campo escondido
};
for (var _i = 0, itensToCollectAll_1 = itensToCollectAll; _i < itensToCollectAll_1.length; _i++) {
    var item = itensToCollectAll_1[_i];
    item.addEventListener('click', handleSelectedItem);
}
