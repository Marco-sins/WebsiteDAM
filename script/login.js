const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const msg_pw2 = document.getElementById('mensaje-pw2');
const msg_pw = document.getElementById('mensaje-contraseña');


pw2.addEventListener('input', () => {
    comparar_contraseñas();
});

pw.addEventListener('input', () => {
    verificar_contraseña();
});

pw2.addEventListener('blur', () => {
    comparar_contraseñas();
});

pw.addEventListener('blur', () => {
    verificar_contraseña();
});

function comparar_contraseñas()
{
    msg_pw2.style.opacity = pw2.value != pw.value ? '1' : '0';
    msg_pw2.style.height = pw2.value != pw.value ? '15px' : '0';
    msg_pw2.style.width = pw2.value != pw.value ? '100%' : '0';
}

function verificar_contraseña() 
{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}$/;
    const valido = regex.test(pw.value);
    const vacio = pw.value.length;
    
    msg_pw.style.opacity = !valido && vacio != 0 ? '1' : '0';
    msg_pw.style.height = !valido && vacio != 0 ? '40px' : '0';
    msg_pw.style.width = !valido && vacio != 0 ? '100%' : '0';
}

const form = document.querySelector('form');
const finish = document.getElementById('boton_registro');

finish.addEventListener('click', (e) => {
    e.preventDefault();
    if (!form.checkValidity())
        alert('Faltan campos por rellenar');
    else
        form.submit();
})

const email = document.getElementById('email');
const tick = document.getElementById('tick');
const cross = document.getElementById('cross');

email.addEventListener('input', () => {
    const str = email.value;
    if (validar_email(str))
        mover_email(true);
    else
        mover_email(false);
})

function validar_email(email)
{
    const regex = /^[a-z]{7}[0-9]{4}@g\.educaand\.es$/;
    return regex.test(email.trim());
}

function mover_email(bool)
{
    tick.style.opacity = bool ? '1' : '0';
    cross.style.opacity = bool ? '0' : '1';
}