// UTILIZANDO O switch / case

function getdayOfTheWeekText() {
  let dayOfTheWeekText;

  switch (dayOfTheWeek) {
    case 0:
      dayOfTheWeekText = "Domingo";
      return dayOfTheWeekText;
    case 1:
      dayOfTheWeekText = "Segunda";
      return dayOfTheWeekText;
    case 2:
      dayOfTheWeekText = "Terça";
      return dayOfTheWeekText;
    case 3:
      dayOfTheWeekText = "Quarta";
      return dayOfTheWeekText;
    case 4:
      dayOfTheWeekText = "Quinta";
      return dayOfTheWeekText;
    case 5:
      dayOfTheWeekText = "Sexta";
      return dayOfTheWeekText;
    case 6:
      dayOfTheWeekText = "Sábado";
      return dayOfTheWeekText;
    default:
      dayOfTheWeekText = " ";
      return dayOfTheWeekText;
  }
}

/* const fullDate = new Date();
let dayOfTheWeek = fullDate.getDay();

let dayOfTheWeekText;

switch (dayOfTheWeek) {
  case 0:
    dayOfTheWeekText = "Domingo";
    break;
  case 1:
    dayOfTheWeekText = "Segunda";
    break;
  case 2:
    dayOfTheWeekText = "Terça";
    break;
  case 3:
    dayOfTheWeekText = "Quarta";
    break;
  case 4:
    dayOfTheWeekText = "Quinta";
    break;
  case 5:
    dayOfTheWeekText = "Sexta";
    break;
  case 6:
    dayOfTheWeekText = "Sábado";
    break;
  default:
    dayOfTheWeekText = " ";
    break;
} */

// Usando if / else if

/* if (dayOfTheWeek === 0) {
  dayOfTheWeekText = "Domingo";
}
else if (dayOfTheWeek === 1) {
  dayOfTheWeekText = "Segunda";
}
else if (dayOfTheWeek === 2) {
  dayOfTheWeekText = "Terça";
}
else if (dayOfTheWeek === 3) {
  dayOfTheWeekText = "Quarta";
}
else if (dayOfTheWeek === 4) {
  dayOfTheWeekText = "Quinta";
}
else if (dayOfTheWeek === 5) {
  dayOfTheWeekText = "Sexta";
}
else if (dayOfTheWeek === 6) {
  dayOfTheWeekText = "Sábado";
} */

const fullDate = new Date("1987-04-23 00:00:00");
let dayOfTheWeek = fullDate.getDay();
const dayOfTheWeekText = getdayOfTheWeekText(dayOfTheWeek);

console.log (dayOfTheWeek, dayOfTheWeekText)

