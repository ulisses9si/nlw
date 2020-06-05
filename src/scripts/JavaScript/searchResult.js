// import { PontoDeColeta } from './PontoDeColeta'
var resultQunt = document.querySelector('#search-result #ponto-cards h3 strong');
var cards = document.querySelector('#search-result #ponto-cards .cards');
var num = 3;
var ramdomNum = Math.floor(Math.random() * (100 - 1) + 1);
resultQunt.innerHTML = num + " Pontos";
cards.innerHTML += "\n<div class=\"cards\">\n    <img src=\"https://picsum.photos/id/" + ramdomNum + "/200\" alt=\"Colectoria\">\n    <h2>tristique, eros ac sodales convallis</h2>\n    <h4>eros ac sodales</h4>\n    <p>\n    Aenean feugiat erat lorem, ut accumsan risus dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n    Vivamus auctor molestie imperdiet. \n    Nullam est est, euismod a ex vitae, semper feugiat neque.\n    Suspendisse posuere tellus nec lectus tincidunt malesuada. \n    Cras tempus mi et ipsum auctor, nec dapibus libero condimentum.\n    </p>\n</div>\n";
for (var i = 0; i <= num; i++) {
    ramdomNum = Math.floor(Math.random() * (100 - 1) + 1);
    cards.innerHTML += "\n        <div class=\"cards\">\n        <img src=\"https://picsum.photos/id/" + ramdomNum + "/200\" alt=\"Colectoria\">\n        <h2>tristique, eros ac sodales convallis</h2>\n        <h4>eros ac sodales</h4>\n        <p>\n        Aenean feugiat erat lorem, ut accumsan risus dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n        Vivamus auctor molestie imperdiet. \n        Nullam est est, euismod a ex vitae, semper feugiat neque.\n        Suspendisse posuere tellus nec lectus tincidunt malesuada. \n        Cras tempus mi et ipsum auctor, nec dapibus libero condimentum.\n        </p>\n    </div>\n";
}
