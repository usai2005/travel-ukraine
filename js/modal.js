
    const openModalBtn = document.querySelector('[data-action="open-modal"]');
    const closeModalBtn = document.querySelector('[data-action="close-modal"]');
    const backdrop =document.querySelector('.js-backdrop');


openModalBtn.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
}

function onCloseModal() {
    console.log("hi");
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {        // клікнули саме у бекдроп
        onCloseModal();
    }
}

function onEscKeyPress(event) {
    console.log(event);
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
}
