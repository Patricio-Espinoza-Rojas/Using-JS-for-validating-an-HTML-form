const data = {
    card_number: '',
    CVC: '',
    amount: '',
    first_name: '',
    last_name: '',
    city:'',
    state:'',
    postal_code: '',
    we_acept: '',
    message: ''
}

const card_number = document.querySelector('#card_number');
const CVC = document.querySelector('#CVC');
const amount = document.querySelector('#amount');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const postal_code = document.querySelector('#postal_code');
const we_acept = document.querySelector('#we_acept');
const message = document.querySelector('#message');
const form = document.querySelector('.form');

card_number.addEventListener('input', read_text);
CVC.addEventListener('input', read_text);
amount.addEventListener('input', read_text);
first_name.addEventListener('input', read_text);
last_name.addEventListener('input', read_text);
city.addEventListener('input', read_text);
state.addEventListener('input', read_text);
postal_code.addEventListener('input', read_text);
we_acept.addEventListener('input', read_text);
message.addEventListener('input', read_text);

//submit event
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // form validation
    const {card_number, CVC, amount, first_name, last_name, city, state, postal_code, 
           we_acept, message} = data;
    //first alert
    if(card_number == '' || CVC == '' || amount == '' || first_name == '' || last_name == '' || 
       city == '' || state == '' || postal_code == '' || we_acept == '' || message == '' ) {
        show_alert('todos los campos son obligatorios', 'error');

        return;
    }

    
    // submit form
    show_alert('Enviado correctamente');    
});


function read_text(e) {
    data[e.target.id] = e.target.value;
}

function show_alert(message, error = null ) {
    const alert = document.createElement('p');
    alert.textContent = message;

    if(error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('correct');
    }

    form.appendChild(alert);
    
    //the message disappears in 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
} 







// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
//     card_number: /^\d{16}$/, // 16 numeros 
//     CVC: /^\d{4}$/, // 4 numeros.
//     Amount: /^\d{1,16}$/, // 1 a 16 numeros.
// 	first_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     state: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	postal_code: /^\d{5,10}$/, // 5 a 10 numeros.
//     message: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.	
// }

// const validarFormulario = (e) => {
//     switch (e.target.card_number) {
//         case "card_number":
//             if(expresiones.card_number.test(e.target.value)){

//             } else {
//                 document.getElementById('card_number_group').classList.add('formulario__grupo-incorrecto');
//             }
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
// });








// password: /^.{4,12}$/, // 4 a 12 digitos.
// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// telefono: /^\d{7,14}$/ // 7 a 14 numeros.