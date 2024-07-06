let trafficLightColor = prompt(
  "Введите цвет светофора красный, желтый, зеленый:"
);

let color;

switch (trafficLightColor) {
  case "красный":
    color = "красный : стой!!";
    break;
  case "желтый":
    color = "желтый : жди!";
    break;
  case "зеленый":
    color = "зеленый : иди!";
    break;
  default:
    color = "Неизвестный цвет!";
}

console.log(color);

let number = prompt("Введите номер планеты солнечной системы (от 1 до 9)");

let planets = [
  "1 -> Меркурий",
  "2 -> Венера",
  "3 -> Земля",
  "4 -> Марс",
  "5 -> Юпитер",
  "6 -> Сатурн",
  "7 -> Уран",
  "8 -> Нептун",
  "9 -> Плутон",
];

let planetName;
if (number >= 1 && number <= 9) {
  planetName = planets[number - 1];
} else {
  planetName = "Введите число планеты от 1 до 9.";
}

console.log(planetName);
