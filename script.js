/* let numeroDeCartas = prompt('Digite o número de cartas'); */
let numeroDeCartas = 14;
numeroDeCartas = Number(numeroDeCartas);
let viradas = 0;
let tentativas = 0;
const arrayDeSorteio = [];
let primeiraCarta = null;
let segundaCarta = null;


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
    /* parrots.innerHTML += `<div class = "frontCard card" onclick="toggleFlip(this)"><img src="./Assets/0${arrayDeSorteio[i]}.gif"></div>`; */
}

function toggleFlip(element) {
    //Acresceta +1 no contador de tentativas toda vez que uma carta for clicada
    tentativas++;
    let contador = document.querySelector('.contador');
    contador.innerHTML = `<p>${tentativas}</p>`;

    //Vira as cartas clicadas
    let frontCard = document.querySelector('.frontCard');
    element.classList.add("backCard");

    if (primeiraCarta === null) {
        primeiraCarta = element;
    } else if (segundaCarta === null) {
        segundaCarta = element;
        verificaViradas(element);
    }

}

function verificaViradas(element) {
    if (primeiraCarta.innerHTML == segundaCarta.innerHTML) {
        console.log('São iguais');
        primeiraCarta = null;
        segundaCarta = null;
    } else {
        setTimeout(function () { primeiraCarta.classList.remove("backCard"); primeiraCarta = null; }, 1000);
        setTimeout(function () { segundaCarta.classList.remove("backCard"); segundaCarta = null; }, 1000);
    }



}