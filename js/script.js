const soma = document.getElementById('soma');
const subtracaoA = document.getElementById('subtracaoA');
const subtracaoB = document.getElementById('subtracaoB');
const multiplicacao = document.getElementById('multiplicacao');
const divisaoA = document.getElementById('divisaoA');
const divisaoB = document.getElementById('divisaoB');
const potenciaA = document.getElementById('potenciaA');
const potenciaB = document.getElementById('potenciaB');
const raizQuadradaA = document.getElementById('raizA');
const raizQuadradaB = document.getElementById('raizB');
const fatorialA = document.getElementById('fatorialA');
const fatorialB = document.getElementById('fatorialB');
const porcentagemA = document.getElementById('porcentagemA');
const porcentagemB = document.getElementById('porcentagemB');
const media = document.getElementById('media');

soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoA.innerHTML = 0;
divisaoB.innerHTML = 0;
potenciaA.innerHTML = 0;
potenciaB.innerHTML = 0;
raizQuadradaA.innerHTML = 0;
raizQuadradaB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentagemA.innerHTML = 0;
porcentagemB.innerHTML = 0;
media.innerHTML = 0;

function calcularSoma(a,b) {
    return a + b;
}


function calcularSubtracaoAB(a, b){
    return a - b;
}

function calcularSubtracaoBA(a, b){
    return b - a;
}

function calcularMultiplicacao(a,b) {
    return ((a * b)).toFixed(2);
}

function calcularDivisaoAB(a, b){
    return ((a / b)).toFixed(2);
}

function calcularDivisaoBA(a, b){
    return ((b / a)).toFixed(2);
}


function calcularPotenciaAB(a, b) {
    return parseInt((Math.pow(a,b)).toFixed(2));
}

function calcularPotenciaBA(a, b) {
    return parseInt((Math.pow(b,a)).toFixed(2));
}

function calcularRaizQuadradaA(a) {
    return Math.sqrt(a).toFixed(2);
}

function calcularRaizQuadradaB(b) {
    return Math.sqrt(b).toFixed(2);
}

function calcularFatorialA(a) {
    if (a === 0 || a === 1) 
        return 1;
        for (var i = a - 1; i >= 1; i--) {
            a *= i;
        }
        return parseInt(a).toFixed(2);
    }

function calcularFatorialB(b) {
    if (b === 0 || b === 1)
        return 1;
    for (var i = b - 1; i >= 1; i--) {
        b *= i;
    }
    return parseInt(b).toFixed(2);
}

function calcularPorcentagemA(a,b) {
    return `${((a * 100) / b).toFixed(0)}%`;
}

function calcularPorcentagemB(a,b) {
    return `${((b * 100) / a).toFixed(0)}%`;
}

function calcularMedia(a,b) {
    return (a + b) / 2
}

function calcular() {
    const inputA = document.getElementById('primeiroNumero').value;
    const inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    soma.innerHTML = calcularSoma(a,b);
    subtracaoA.innerHTML = calcularSubtracaoAB(a,b);
    subtracaoB.innerHTML = calcularSubtracaoBA(a,b);
    multiplicacao.innerHTML = calcularMultiplicacao(a,b);
    divisaoA.innerHTML = calcularDivisaoAB(a,b);
    divisaoB.innerHTML = calcularDivisaoBA(a,b);
    potenciaA.innerHTML = calcularPotenciaAB(a,b);
    potenciaB.innerHTML = calcularPotenciaBA(a,b);
    raizQuadradaA.innerHTML = calcularRaizQuadradaA(a);
    raizQuadradaB.innerHTML = calcularRaizQuadradaB(b);
    fatorialA.innerHTML = calcularFatorialA(a);
    fatorialB.innerHTML = calcularFatorialB(b);
    porcentagemA.innerHTML = calcularPorcentagemA(a,b);
    porcentagemB.innerHTML = calcularPorcentagemB(a,b);
    media.innerHTML = calcularMedia(a,b);
}