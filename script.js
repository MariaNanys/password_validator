const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

function goodPass() {
    if (pass.value.length >= minValue && pass.value.match(numbers) && pass.value.match(letters)) {
        p.textContent = 'Masz dobre hasło! 😀';
        p.style.color = 'gold';
        if (pass.value.match(special)) {
            p.textContent = 'Masz super mocne hasło! 🏋🏼‍♀️';
            p.style.color = 'lime';
        }
    } else  {
        p.textContent = 'Masz słabe hasło! 🙁';
        p.style.color = 'tomato';
    }
}

const checkPassword = () => {
    if (pass.value !== '') {
        showMsg()
    } else {
        p.textContent = 'Nie podałeś hasła...';
        p.style.color = '';
    }
}

pass.addEventListener('keyup', checkPassword)