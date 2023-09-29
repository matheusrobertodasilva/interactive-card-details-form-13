const content = document.querySelector('.content__cards')

const cadastro = localStorage.getItem('cadastro');

const cadastroCovertido = JSON.parse(cadastro);

let arrayNumber = cadastroCovertido.cardNumber;

let b1 = arrayNumber.split('').slice(0,4).join(""); ;
let b2 = arrayNumber.split('').slice(4,8).join(""); ;
let b3 = arrayNumber.split('').slice(8,12).join(""); ;
let b4 = arrayNumber.split('').slice(12,16).join(""); ; 

content.innerHTML = `
<div class="card__back">
                <p class="card__cvc">${cadastroCovertido.cvc}</p>
                <img src="./images/bg-card-back.png" alt="parte de tras de um cartão" class="card__image-back">
            </div>

            <div class="card__front">
                <div class="block__card">
                    <img src="./images/card-logo.svg" alt="Logo do cartão" class="card__logo">
                    <p class="card__number">${b1} ${b2} ${b3} ${b4}</p>
                    <div class="card__name-date">
                        <p class="name">${cadastroCovertido.name.toUpperCase()}</p>
                        <p class="date">${cadastroCovertido.month}/${cadastroCovertido.year}</p>
                    </div>
                </div>
                <img src="./images/bg-card-front.png" alt="parte da frente de um cartão" class="card__image-front">
            </div>
`
