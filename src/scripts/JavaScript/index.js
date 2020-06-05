var buttonSearch = document.querySelector('#page-home main a');
var modal = document.querySelector('#modal');
buttonSearch.addEventListener('click', function () {
    modal.classList.remove('hide');
});
var buttonClose = document.querySelector("#modal .header a#close");
buttonClose.addEventListener('click', function () {
    modal.classList.add('hide');
});
