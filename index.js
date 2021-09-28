// const uno = document.getElementById('uno');
// const dos = document.getElementById('dos');
// const tres = document.getElementById('tres');
// const cuatro = document.getElementById('cuatro');
// const cinco = document.getElementById('cinco');
// const seis = document.getElementById('seis');
// const siete = document.getElementById('siete');
// const ocho = document.getElementById('ocho');
// const nueve = document.getElementById('nueve');
// const cero = document.getElementById('cero');
// const mas = document.getElementById('mas');
// const menos = document.getElementById('menos');
// const multiplicar = document.getElementById('multiplicar');
// const dividir = document.getElementById('dividir');
// const punto = document.getElementById('punto');
// const igual = document.getElementById('igual');

function insert(num){
    const span = document.getElementById('sp');
    span.style.display = 'none';
    let numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero + num;
}

function clean(){
    document.getElementById('screen').innerHTML = '';
    const span = document.getElementById('sp');
    span.style.display = 'flex';
    const operation = document.getElementById('operation');
    operation.innerHTML = 0;
}

function back(){
    let numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero.substring(0, numero.length - 1);
}

function calculate(){
    let numero = document.getElementById('screen').innerHTML;
    if(numero){
        document.getElementById('operation').innerHTML = eval(numero);
    }else{
        const span = document.getElementById('sp');
        span.style.display = 'none';
        document.getElementById('screen').innerHTML = 'Error ';
    }
}

