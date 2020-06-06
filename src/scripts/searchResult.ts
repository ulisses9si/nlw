// import { PontoDeColeta } from './PontoDeColeta'

let resultQunt = document.querySelector('#search-result #ponto-cards h3 strong');
let cards = document.querySelector('#search-result #ponto-cards .cards');

let num = 3;
let ramdomNum = Math.floor(Math.random() * (100 - 1) + 1)
let tam = 300

resultQunt.innerHTML = `${num + 2} Pontos`

cards.innerHTML += `
<div class="card">
    <img src="https://picsum.photos/id/${ramdomNum}/${tam}/${tam}" alt="Colectoria">
    <h2>tristiqulis</h2>
    <h4>eros ac sodales</h4>
    <p>
    Aenean feugiat eraiscing elit.<br> 
    Vivamus auctor molestie imperdiet.<br>
    Nullam est estr feugiat neque.<br>

    </p>
</div>
`

for(let i = 0; i <= num; i++){
    ramdomNum = Math.floor(Math.random() * (100 - 1) + 1)
    cards.innerHTML += `
        <div class="card">
        <img src="https://picsum.photos/id/${ramdomNum}/${tam}/${tam}" alt="Colectoria">
        <h2>tristiqu</h2>
        <h4>eros ac sodales</h4>
        <p>
        Aenean feugor sipiscing elit.<br> 
        Vivamus auctor molestie imperdiet. <br>
        Nullam est estr feugiat neque.<br>
        </p>
    </div>
` 
}
