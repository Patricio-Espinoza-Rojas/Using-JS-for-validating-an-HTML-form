let form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

let errors = [];

let mensaje_error = document.querySelector('#mensaje_error')    
let card_number = document.querySelector('#card_number');
let CVC = document.querySelector('#CVC');
let amount = document.querySelector('#amount');
let first_name = document.querySelector('#first_name');
let last_name = document.querySelector('#last_name');
let city = document.querySelector('#city');
let state = document.querySelector('#state');
let postal_code = document.querySelector('#postal_code');
let msj = document.querySelector('#msj');

let empty = /^$/;
let formatCard = /^(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}$/;
let formatCVC = /^[0-9]{3,}$/;
let formatamount = /^(([1-9]+)(?:([,]?\d{3})|\d?)+(\.\d+)?)|^0{1}\.(0+)?[1-9]+(0+)?$/;
let formatfirst_name = /^([a-z ,.'-ñáéíóú]{2,60})$/;
let formatlast_name = /^([a-z ,.'-ñáéíóú]{2,60})$/;
let formatcity = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
let formatState = /^...$/;
let formatpostal_code =/^([A-Z][0-9][A-Z][0-9][A-Z][0-9]|\d{6,12})$/;
let formatmsj = /^[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]{4,500}$/; 

if(empty.test(card_number.value)){
    errors.push({ item: 'card_number', message: 'El campo no puede estar vacio!', input: card_number })
}else if(!formatCard.test(card_number.value)){
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
    errors.push({ item: 'amount', message: 'El campo debe ser un Valor valido!', input: amount})
}else{
    amount.classList.remove('is-invalid');
}

if(empty.test(first_name.value)){
    errors.push({ item: 'first_name', message: 'El campo no puede estar vacio!', input: first_name })
}else if(!formatfirst_name.test(first_name.value)){
    errors.push({ item: 'first_name', message: 'El campo debe ser un nombre valido!', input: first_name})
}else{
    first_name.classList.remove('is-invalid');
}

if(empty.test(last_name.value)){
    errors.push({ item: 'last_name', message: 'El campo no puede estar vacio!', input: last_name })
}else if(!formatlast_name.test(last_name.value)){
    errors.push({ item: 'last_name', message: 'El campo debe ser un apellido valido!', input: last_name})
}else{
    last_name.classList.remove('is-invalid');
}

if(empty.test(city.value)){
    errors.push({ item: 'city', message: 'El campo no puede estar vacio!', input: city })
}else if(!formatcity.test(city.value)){
    errors.push({ item: 'city', message: 'El campo debe ser una ciudad valida!', input: city})
}else{
    city.classList.remove('is-invalid');
}

if(empty.test(state.value)){
    errors.push({ item: "state" , message: 'El campo no puede estar vacio!', input: state });
}else if(!formatState.test(state.value)){
    errors.push({ item: 'state', message: 'El campo debe ser una opcion valida', input: state })
}else{
    state.classList.remove('is-invalid');
}

if(empty.test(postal_code.value)){
    errors.push({ item: 'postal_code', message: 'El campo no puede estar vacio!', input: postal_code })
}else if(!formatpostal_code.test(postal_code.value)){
    errors.push({ item: 'postal_code', message: 'El campo debe ser un codigo postal valido!', input: postal_code})
}else{
    postal_code.classList.remove('is-invalid');
}


if(empty.test(msj.value)){
    errors.push({ item: 'msj', message: 'El campo no puede estar vacio!', input: msj })
}else if(!formatmsj.test(msj.value)){
    errors.push({ item: 'msj', message: 'El campo debe ser un mensaje valido!', input: msj})
}else{
    msj.classList.remove('is-invalid');
}


    if(errors.length>0){
        let msj = "Some fields are missing"
        document.querySelector('.mensaje_error').innerHTML = msj;
        mensaje_error.classList.add('is-invalid');
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