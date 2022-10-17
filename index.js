const btn = document.querySelector('.btn');
const modal = document.querySelector('dialog');
const cancelButton = document.querySelector('.cancel');

btn.onclick = () => {
    modal.showModal();
}

cancelButton.onclick = () => {
    modal.close();
}
