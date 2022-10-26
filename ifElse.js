// if, if else, else
/*
Entre 0 - 11 = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 - 23 = Boa noite
*/

// if pode ser usado sozinho.
// Sempre que utilizo else (if else), preciso de um if antes.
// Pode ter vários else if na condição.
// O else sozinho pode ter apenas uma única vez.

const hora = 30;

if (hora >= 0 && hora <= 11){
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17){
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23){
  console.log("Boa noite");
} else {
  console.log("Horas são de 0 - 24");
}