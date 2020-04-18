let credits = 23580,
  pricePerDroid = 3000,
  droidQuantity = prompt("Сколько дроидов купить?", 0),
  totalPrice = +droidQuantity * pricePerDroid,
  creditsRemainer = +credits - totalPrice;
if (droidQuantity === null) {
  alert("Отменено пользователем!");
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else {
  alert(
    `Вы купили ${droidQuantity} дроидов, на счету осталось ${creditsRemainer} кредитов.`
  );
}
