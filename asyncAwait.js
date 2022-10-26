function rand(min = 0, max = 3) {
    min = 1000;
    max = 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waithere(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
            }
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, time)
    });
}

/* waithere('Fase 1', rand())
.then(valor => {console.log(valor);
return waithere('fase 2', rand());
})
.then(fase => {
    console.log(fase);
    return waithere('fase 3', rand());
})
.then(fase => {
    console.log(fase);
    return fase;
})
.then (fase => {
    console.log('Terminando na fase:', fase);
})
.catch(e => console.log(e)); */

// ASYNC and AWAIT
async function execute() {
    try {
        const fase1 = await waithere('Fase 1', rand());
        console.log(fase1);
        const fase2 = await waithere(2, rand());
        console.log(fase2);
        const fase3 = await waithere('Fase 3', rand());
        console.log(fase3);
        console.log('Terminando na fase:', fase2);
    } catch (e) {
        console.log(e);
    }
}

execute()