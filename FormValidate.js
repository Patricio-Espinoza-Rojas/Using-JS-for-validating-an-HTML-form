let form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

let errors = [];
let message = [];
    
let card_number = document.querySelector('#card_number');
let CVC = document.querySelector('#CVC');
let amount = document.querySelector('#amount');
let first_name = document.querySelector('#first_name');
let last_name = document.querySelector('#last_name');
let city = document.querySelector('#city');
let state = document.querySelector('#state');
let postal_code = document.querySelector('#postal_code');
let we_acept = document.querySelector('#we_acept');
let msj = document.querySelector('#msj');

let empty = /^$/;
let formatcard = /^(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}$/;
let formatCVC = /^[0-9]{3,}$/;
let formatamount = /^(([1-9]+)(?:([,]?\d{3})|\d?)+(\.\d+)?)|^0{1}\.(0+)?[1-9]+(0+)?$/;
let formatfirst_name = /^([a-z ,.'-ñáéíóú]{2,60})$/;
let formatlast_name = /^([a-z ,.'-ñáéíóú]{2,60})$/;
let formatcity = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
let formatpostal_code =/^[0-9]{5}-?[0-9]{3}$/;
let formatmsj = /^[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]{4,500}$/; 

if(empty.test(card_number.value)){
    errors.push({ item: 'card_number', message: 'El campo no puede estar vacio!', input: card_number })
}else if(!formatcard.test(card_number.value)){
    errors.push({ item: 'card_number', message: 'El campo debe ser un numero valido!', input: card_number})
}else{
    card_number.classList.remove('is-invalid');
}

if(empty.test(CVC.value)){
    errors.push({ item: 'CVC', message: 'El campo no puede estar vacio!', input: CVC })
}else if(!formatCVC.test(CVC.value)){
    errors.push({ item: 'CVC', message: 'El campo debe ser un numero valido!', input: CVC})
}else{
    CVC.classList.remove('is-invalid');
}

if(empty.test(amount.value)){
    errors.push({ item: 'amount', message: 'El campo no puede estar vacio!', input: amount })
}else if(!formatamount.test(amount.value)){
    errors.push({ item: 'amount', message: 'El campo debe ser un numero valido!', input: amount})
}else{
    amount.classList.remove('is-invalid');
}

if(empty.test(first_name.value)){
    errors.push({ item: 'first_name', message: 'El campo no puede estar vacio!', input: first_name })
}else if(!formatfirst_name.test(first_name.value)){
    errors.push({ item: 'first_name', message: 'El campo debe ser un numero valido!', input: first_name})
}else{
    first_name.classList.remove('is-invalid');
}

if(empty.test(last_name.value)){
    errors.push({ item: 'last_name', message: 'El campo no puede estar vacio!', input: last_name })
}else if(!formatlast_name.test(last_name.value)){
    errors.push({ item: 'last_name', message: 'El campo debe ser un numero valido!', input: last_name})
}else{
    last_name.classList.remove('is-invalid');
}

if(empty.test(city.value)){
    errors.push({ item: 'city', message: 'El campo no puede estar vacio!', input: city })
}else if(!formatcity.test(city.value)){
    errors.push({ item: 'city', message: 'El campo debe ser un numero valido!', input: city})
}else{
    city.classList.remove('is-invalid');
}


if(empty.test(postal_code.value)){
    errors.push({ item: 'postal_code', message: 'El campo no puede estar vacio!', input: postal_code })
}else if(!formatpostal_code.test(postal_code.value)){
    errors.push({ item: 'postal_code', message: 'El campo debe ser un numero valido!', input: postal_code})
}else{
    postal_code.classList.remove('is-invalid');
}


if(empty.test(msj.value)){
    errors.push({ item: 'msj', message: 'El campo no puede estar vacio!', input: msj })
}else if(!formatmsj.test(msj.value)){
    errors.push({ item: 'msj', message: 'El campo debe ser un numero valido!', input: msj})
}else{
    msj.classList.remove('is-invalid');
}

console.log(errors);
    if(errors.length > 0){
        errors.forEach(({ item, message, input }) => {
            input.classList.add('is-invalid');
            document.querySelector(`.${item}`).innerHTML = message;
        });
    } else {
        form.submit();
    }
});


// const data = {
//     card_number: '',
//     CVC: '',
//     amount: '',
//     first_name: '',
//     last_name: '',
//     city:'',
//     state:'',
//     postal_code: '',
//     we_acept: '',
//     message: ''
// }

// const card_number = document.querySelector('#card_number');
// const CVC = document.querySelector('#CVC');
// const amount = document.querySelector('#amount');
// const first_name = document.querySelector('#first_name');
// const last_name = document.querySelector('#last_name');
// const city = document.querySelector('#city');
// const state = document.querySelector('#state');
// const postal_code = document.querySelector('#postal_code');
// const we_acept = document.querySelector('#we_acept');
// const message = document.querySelector('#message');
// const form = document.querySelector('.form');

// card_number.addEventListener('input', read_text);
// CVC.addEventListener('input', read_text);
// amount.addEventListener('input', read_text);
// first_name.addEventListener('input', read_text);
// last_name.addEventListener('input', read_text);
// city.addEventListener('input', read_text);
// state.addEventListener('input', read_text);
// postal_code.addEventListener('input', read_text);
// we_acept.addEventListener('input', read_text);
// message.addEventListener('input', read_text);

// //submit event
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // form validation
//     const {card_number, CVC, amount, first_name, last_name, city, state, postal_code, 
//            we_acept, message} = data;
//     //first alert
//     if(card_number == '' || CVC == '' || amount == '' || first_name == '' || last_name == '' || 
//        city == '' || state == '' || postal_code == '' || we_acept == '' || message == '' ) {
//         show_alert('todos los campos son obligatorios', 'error');

//         return;
//     }

    
//     // submit form
//     show_alert('Enviado correctamente');    
// });


// function read_text(e) {
//     data[e.target.id] = e.target.value;
// }

// function show_alert(message, error = null ) {
//     const alert = document.createElement('p');
//     alert.textContent = message;

//     if(error) {
//         alert.classList.add('error');
//     } else {
//         alert.classList.add('correct');
//     }

//     form.appendChild(alert);
    
//     //the message disappears in 5 seconds
//     setTimeout(() => {
//         alert.remove();
//     }, 3000);
// } 




















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