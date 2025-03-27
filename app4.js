const operator = prompt('Введите операцию (+, -, *, /):');
const num1 = parseFloat(prompt('Введите первое число:'));
const num2 = parseFloat(prompt('Введите второе число:'));
let result;

if (operator === '+') {
  result = num1 + num2;
} else if (operator === '-') {
  result = num1 - num2;
} else if (operator === '*') {
  result = num1 * num2;
} else if (operator === '/') {
  result = num2 !== 0 ? num1 / num2 : 'Ошибка: деление на ноль!';
} else {
  result = 'Ошибка: неверная операция!';
}

alert(`Результат: ${result}`);