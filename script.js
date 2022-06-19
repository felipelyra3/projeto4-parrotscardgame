/* let numeroDeCartas = prompt('Digite o número de cartas'); */
let numeroDeCartas = 14;
numeroDeCartas = Number(numeroDeCartas);
let viradas = 0;
let tentativas = 0;
const arrayDeSorteio = [];


/* while (numeroDeCartas < 4 || numeroDeCartas > 14 || (numeroDeCartas % 2 !== 0)) {
    numeroDeCartas = prompt('Digite um valor válido');
} */

//Gera os números dos gifs das cartas
for (let i = 0; i < numeroDeCartas / 2; i++) {
    arrayDeSorteio.push(i + 1);
    arrayDeSorteio.push(i + 1);
}

//Emparalha os números aleatórios
let randomNumber;
let tmp;
for (let i = arrayDeSorteio.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = arrayDeSorteio[randomNumber];
    arrayDeSorteio[randomNumber] = arrayDeSorteio[i];
    arrayDeSorteio[i] = tmp;
}

console.log(numeroDeCartas);
console.log(arrayDeSorteio);

let parrots = document.querySelector('.parrots');
//Gera as cartas embaralhadas no HTML
for (let i = 0; i < numeroDeCartas; i++) {
    parrots.innerHTML += `<div class = "frontCard card0${i + 1}" onclick="toggleFlip(this)"><img src="./Assets/0${arrayDeSorteio[i]}.gif"></div>`;
}

function toggleFlip(element) {
    //Acresceta +1 no contador de tentativas toda vez que uma carta for clicada
    tentativas++;
    let contador = document.querySelector('.contador');
    contador.innerHTML = `<p>${tentativas}</p>`;

    let frontCard = document.querySelector('.frontCard');    
    element.classList.add("backCard");  
    
}

function verificaViradas(element) {
   /*  let queryselector = `document.querySelector('.card${i}')`;
    for (let i = 0; i < numeroDeCartas; i++) {
        let card = queryselector;
        console.log(card);
    } */
}