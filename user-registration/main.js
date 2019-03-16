const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const emailInput = document.querySelector('#email');
const mobileInput = document.querySelector('#mobile');
const msg = document.querySelector('.notification');
const userList = document.querySelector('.list');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value.length === 0 || emailInput.value.length === 0 || ageInput.value.length == 0 || mobileInput.value.length === 0) {
        msg.classList.add('is-danger');
        msg.style.display = 'block';
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.style.display = 'none', 3000);
    } else {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerHTML = `<i class='fa fa-user'></i>&nbsp;&nbsp;&nbsp;${nameInput.value} (${ageInput.value})&nbsp;&nbsp;&nbsp;<i class='fa fa-envelope'></i>&nbsp;&nbsp;&nbsp;${emailInput.value}&nbsp;&nbsp;&nbsp;<i class='fa fa-phone'></i>&nbsp;&nbsp;&nbsp;${mobileInput.value}`
        li.appendChild(span);
        li.classList.add('list-item');
        userList.appendChild(li);
    }
    nameInput.value = null;
    ageInput.value = null;
    emailInput.value = null;
    mobileInput.value = null;
}

document.getElementById('reset').addEventListener('click', () => {
    nameInput.value = null;
    ageInput.value = null;
    emailInput.value = null;
    mobileInput.value = null;
    userList.innerHTML = null;
})
