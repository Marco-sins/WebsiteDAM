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
    comparar_contraseñas();
    verificar_contraseña();
});

function comparar_contraseñas()
{
    if (pw2.value != pw.value)
    {
        msg_pw2.style.opacity = '1';
        msg_pw2.style.height = '15px';
        msg_pw2.style.width = '100%';
    }
    else
    {
        msg_pw2.style.opacity = '0';
        msg_pw2.style.height = '15px';
        msg_pw2.style.width = '100%';
    }
}

function verificar_contraseña() 
{
    if (pw.value.length < 8)
    {
        msg_pw.style.opacity = '1';
        msg_pw.style.height = '15px';
        msg_pw.style.width = '100%';
    }
    else
    {
        msg_pw.style.opacity = '0';
        msg_pw.style.height = '15px';
        msg_pw.style.width = '100%';
    }
}

const form = document.querySelector('form');
const finish = document.getElementsById('boton_registro');

finish.addEventListener('click', (e) => {
    e.preventDefault();
    if (!form.checkValidity())
    {
        alert('Faltan campos por rellenar');
    }
})
