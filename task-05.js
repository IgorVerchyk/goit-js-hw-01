let destination = prompt("Страна для доставки", ""),
  country,
  prise;
if (destination === null) {
  alert(`Отменено пользователем!`);
} else {
  destination = destination.toLowerCase();
  switch (destination) {
    case "китай":
      country = "Китай";
      prise = 100;
      alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
      break;
    case "чили":
      country = "Чили";
      prise = 250;
      alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
      break;
    case "австралия":
      country = "Австралия";
      prise = 170;
      alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
      break;
    case "индия":
      country = "Индия";
      prise = 80;
      alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
      break;
    case "ямайка":
      country = "Ямайка";
      prise = 120;
      alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
