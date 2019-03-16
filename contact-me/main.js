const form = document.querySelector('#contact-form');
const error = document.querySelector('.notification');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (nameInput.value.length === 0 || emailInput.value.length === 0 || subjectInput.value.length === 0 || messageInput.value.length === 0) {
        error.style.display = 'block';
        error.classList.add('is-danger');
        error.innerHTML = 'Please enter all fields';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    } else {
        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Subject:', subjectInput.value);
        console.log('Message:', messageInput.value);
        reset();
    }
});

const reset = () => {
    nameInput.value = null;
    emailInput.value = null;
    subjectInput.value = null;
    messageInput.value = null;
}