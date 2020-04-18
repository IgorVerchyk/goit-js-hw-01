let total = 0;
while (true) {
  let input = prompt(`Please,enter you number`, "");
  if (input === null) break;
  total += +input;
}
alert(`Summ of you numbers is ${total}`);
