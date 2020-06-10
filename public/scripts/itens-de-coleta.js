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
    "./assets/lampadas.svg",
    './assets/baterias.svg',
    "./assets/eletronicos.svg",
    './assets/oleo.svg',
    './assets/papeis-papelao.svg',
    './assets/organicos.svg'
];
var itensToCollect = document.querySelector('#itens-coleta');
for (var i = 0; i < url.length; i++) {
    itensToCollect.innerHTML += "                           \n     <li data-id=\"" + itens[i] + "\" class=\"\">\n        <img src=\"" + url[i] + "\" alt=\"" + itens[i] + "\">\n        <span>" + itens[i] + "</span>\n    </li>\n";
}
console.log('itens terminados');
/**
 * Parte onde seleciona os itens
 */
var itensToCollectAll = document.querySelectorAll('#itens-coleta');
var selectedItens = [];
var collectedItens = document.querySelector('input[name=itens]');
var handleSelectedItem = function (event) {
    var itemLi = event.target;
    //Adicionar ou remover uma classe no HTML
    itemLi.classList.toggle('selected');
    var dataId = event.target.dataset.id;
    console.log("ITEM ID: ", dataId);
    /**
     * Verificar se existe algum item selecionado
     * Se sim:
     * Pegar os itens selecionados
     */
    var alredySelected = selectedItens.findIndex(function (item) { return item == dataId; });
    // console.log(alredySelected)
    if (alredySelected > -1) {
        /**
         * Se estiver selecionado:
         * Tirar da seleção
         */
        var filteredItens_1 = selectedItens.filter(function (item) { return item != dataId; });
        //  console.log(filteredItens)
        selectedItens = filteredItens_1;
    }
    else {
        /**
         * Se não estiver selecionado:
         * Adicionar á seleção
         */
        selectedItens.push(dataId);
    }
    console.log(selectedItens);
    var filteredItens = selectedItens.filter(function (item) { return item != undefined; });
    console.log(filteredItens);
    selectedItens = filteredItens;
    console.log("SELECTED ITENS: " + selectedItens);
    // Atualizar o campo escondido
    collectedItens.value = selectedItens;
};
for (var _i = 0, itensToCollectAll_1 = itensToCollectAll; _i < itensToCollectAll_1.length; _i++) {
    var item = itensToCollectAll_1[_i];
    item.addEventListener('click', handleSelectedItem);
}
