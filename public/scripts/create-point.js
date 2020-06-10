function populateUfs() {
    var ufSelect = document.querySelector('select[name=UF]');
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(function (res) { return res.json(); })
        .then(function (states) {
        for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
            var state = states_1[_i];
            ufSelect.innerHTML += "<option value=\"" + state.id + "\">" + state.nome + "</option>";
        }
        console.log('Criado com suscesso');
    });
}
function getCities(event) {
    var citySelect = document.querySelector('select[name=city]');
    var stateInput = document.querySelector('input[name=state]');
    var url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + event.target.value + "/municipios";
    var indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;
    console.log(event.target.value);
    console.log(url);
    fetch(url).then(function (res) { return res.json(); }).then(function (cities) {
        for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
            var city = cities_1[_i];
            citySelect.innerHTML += "<option value=\"" + city.nome + "\">" + city.nome + "</option>";
        }
    });
    citySelect.disabled = false;
}
populateUfs();
document
    .querySelector('select[name=UF]')
    .addEventListener('change', getCities);
