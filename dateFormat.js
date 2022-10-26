function zeroleft (num) {
  return num >= 10 ? num : `0${num}`;
}

function dateFormat(data) {
  const dia = zeroleft (data.getDate());
  const mes = zeroleft (data.getMonth());
  const ano = zeroleft (data.getFullYear());
  const hora = zeroleft (data.getHours());
  const min = zeroleft (data.getMinutes());
  const seg = zeroleft (data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = dateFormat(data);
console.log(dataBrasil);  