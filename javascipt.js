var placeButButtons = document.querySelectorAll('#place-list .place-buy-button')

var modal = document.querySelector('.modal')

var modalCloseButton=document.querySelector('.modal-close')

for (var i=0;i<placeButButtons.length;i++) {
    placeButButtons[i].onclick = function (e) {
        modal.style.display = 'flex';
    }
}

modalCloseButton.onclick = function () {
    modal.style.display = 'none';
}