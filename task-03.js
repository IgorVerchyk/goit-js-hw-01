const ADMIN_PASSWORD = "jqueryismyjam";
const passw = prompt("Введите пароль");
let message;
if (passw === null) {
  message = "Отменено пользователем!";
} else if (passw === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
