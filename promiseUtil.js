// PROMISES
function rand(min, max) {
    mim = 1000;
    max = 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na Promise ');
            return;
        }, time);
    });
}


//Promise All
const promises1 = [
    'Primeiro valor',
    waitThere('Promise 1', 3000),
    waitThere('Promise 2', 500),
    waitThere('Promise 3', 1000),
    'Outro valor',
];

Promise.all(promises1)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });

//Promise Race
const promises2 = [
    waitThere('Promise 1', rand(1, 5)),
    waitThere('Promise 2', rand(1, 5)),
    waitThere('Promise 3', rand(1, 5)),
    waitThere(1000, rand(1, 5)),
];

Promise.race(promises2)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });

// Promise resolve ou reject
function downloadPage() {
    const inCache = true;
    if (inCache) {
        return Promise.reject('Página em cache');
    } else {
        return waitThere('Baixei a página', 3000);
    }
}

downloadPage()
    .then(dataPages => {
        console.log(dataPages);
    })
    .catch(e => console.log('Erro', e));

