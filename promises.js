// PROMISES
function rand(min, max) {
    mim = 1000;
    max = 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Tipo de dados inseridos está errado'));
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, time);
    });
}

waitThere('Conexão com DB', rand(1, 3))
    .then(aswer => {
        console.log(aswer);
        return waitThere('Buscando dados da BASE', rand(1, 3))
    })
    .then(aswer => {
        console.log(aswer);
        return waitThere('Buscando os dados na BASE', rand(1, 3));
    }).then(aswer => {
        console.log(aswer);
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('', e);
    });

console.log('Isso aqui será exibido antes de qualquer promise');