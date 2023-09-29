// formulaio
const formulary = document.querySelector('.formulary')

formulary.addEventListener('submit',(e)=>{
    e.preventDefault()

    const listaResposta = {
        'name': e.target.elements['name'].value,
        'cardNumber': e.target.elements['cardNumber'].value,
        'month': e.target.elements['month'].value,
        'year': e.target.elements['year'].value,
        'cvc': e.target.elements['cvc'].value,
    }

    localStorage.setItem('cadastro', JSON.stringify(listaResposta))

    window.location.href = '../success.html'
})


// Campos
const fields = document.querySelectorAll('.form__field');

// mensagem de erro
const error = document.getElementsByClassName('message-erro');

// Visualização 
const cardFrontName = document.querySelector('.name');
const cardFrontNumber = document.querySelector('.card__number');
const cardFrontDate = document.querySelector('.date');
const cardFrontCvc = document.querySelector('.card__cvc');

fields.forEach( field => {
    field.addEventListener('blur', () => checkField(field));
    field.addEventListener('invalid', evento => evento.preventDefault());
});

fields.forEach(field => {
    field.addEventListener('blur', ()=>{
        switch(field.id){
            case 'name':
                cardFrontName.textContent = field.value.toUpperCase();
                break;
            case 'cardNumber':
                let n1 = field.value.split('').slice(0,4).join("");
                let n2 = field.value.split('').slice(4,8).join("");
                let n3 = field.value.split('').slice(8,12).join("");
                let n4 = field.value.split('').slice(12,16).join("");
                cardFrontNumber.textContent = `${n1} ${n2} ${n3} ${n4}`;
                break;
            case 'month':
                cardFrontDate.textContent = field.value;
                break
            case 'year':
                cardFrontDate.textContent += '/' + field.value;
                break;
            case 'cvc':
                cardFrontCvc.textContent = field.value
                break
        }
    })
})

// array com todos os erros possiveis 
const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

/* objetos de objeto que tem como função pegar o nome de um objeto e associar a um componente com mesmo 
nome */
const messages = {
    name:{
        valueMissing: "The name field cannot be empty.",
        tooShort: "Wrong format, name short"
    },
    number:{
        valueMissing: "The number field cannot be empty.",
        patternMismatch: "wrong format, number only ",
        tooShort: "Wrong format, number card short"
    },
    month:{
        valueMissing: "can't be blank",
        patternMismatch: "wrong format, number only",
        tooShort: "Wrong format, number card short"
    },
    year:{
        valueMissing: "can't be blank",
        patternMismatch: "wrong format, number only",
        tooShort: "Wrong format, number card short"
    },
    cvc:{
        valueMissing: "can't be blank",
        patternMismatch: "wrong format, number only",
        tooShort: "Wrong format, number card short"
    }
};

function checkField(field){
    let message = '';
    field.setCustomValidity('');

    errorTypes.forEach(erro => {
        if(field.validity[erro]){
            message = messages[field.name][erro];
        }
    });

    const erroMessage = field.parentNode.querySelector('.message-erro');
    const validadorDeInput = field.checkValidity();

    if(!validadorDeInput){
        field.style.borderColor = "red"
        erroMessage.textContent = message;

    } else {
        field.style.borderColor = ""
        erroMessage.textContent = "";
    };
}