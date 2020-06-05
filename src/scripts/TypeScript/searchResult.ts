// import { PontoDeColeta } from './PontoDeColeta'

let resultQunt = document.querySelector('#search-result #ponto-cards h3 strong');
let cards = document.querySelector('#search-result #ponto-cards .cards');

let num = 3;
let ramdomNum = Math.floor(Math.random() * (100 - 1) + 1)

resultQunt.innerHTML = `${num} Pontos`

cards.innerHTML += `
<div class="cards">
    <img src="https://picsum.photos/id/${ramdomNum}/200" alt="Colectoria">
    <h2>tristique, eros ac sodales convallis</h2>
    <h4>eros ac sodales</h4>
    <p>
    Aenean feugiat erat lorem, ut accumsan risus dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> 
    Vivamus auctor molestie imperdiet.<br>
    Nullam est est, euismod a ex vitae, semper feugiat neque.<br>
    Suspendisse posuere tellus nec lectus tincidunt malesuada. <br>
    Cras tempus mi et ipsum auctor, nec dapibus libero condimentum.<br>
    </p>
</div>
`

for(let i = 0; i <= num; i++){
    ramdomNum = Math.floor(Math.random() * (100 - 1) + 1)
    cards.innerHTML += `
        <div class="cards">
        <img src="https://picsum.photos/id/${ramdomNum}/200" alt="Colectoria">
        <h2>tristique, eros ac sodales convallis</h2>
        <h4>eros ac sodales</h4>
        <p>
        Aenean feugiat erat lorem, ut accumsan risus dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> 
        Vivamus auctor molestie imperdiet. <br>
        Nullam est est, euismod a ex vitae, semper feugiat neque.<br>
        Suspendisse posuere tellus nec lectus tincidunt malesuada.<br> 
        Cras tempus mi et ipsum auctor, nec dapibus libero condimentum.<br>
        </p>
    </div>
` 
}
