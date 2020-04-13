

const cartButton = document.querySelector("#cart_button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cancel = document.querySelector("#cancel");
const body = document.querySelector(".body");

function toggleModal(){
    modal.classList.toggle("is_open");
    body.classList.toggle("no_scroll");
}
cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);
cancel.addEventListener('click', toggleModal);


new WOW().init();
