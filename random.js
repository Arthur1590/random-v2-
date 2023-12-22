
for (let i = 1; i <= 5; i++) {
  const min = Math.floor(Math.random() * 10) + 1;
  const max = Math.floor(Math.random() * 10) + 1;

  const ask = +prompt(`Пример №${i}: ${min} + ${max}`);
  const correct = min + max; 

  if (ask === correct) {
    console.log(`Ваш ответ ${ask} верный!\nПравильный ответ: ${correct}.`);
  } else if (ask === '') {
    console.log(`Вы ничего не ввели`);
  } else {
    // throw Error(`Ваш ответ ${ask} не верный! Вот правильный ${correct}. Попробуйте еще раз!`);
    console.log(`Ваш ответ ${ask} не верный!\nВот правильный ${correct}.\nПопробуйте еще раз!`);
  }
}

////// 

const numCase = prompt('Укажите количество прмиеров для решения: ');

function randomNum() {
  return Math.floor(Math.random() * 10) + 1; // Генерация случайного числа от 1 до 10
}

function randomOper() {
  const operators = ['+', '-', '*', '/'];
  const choosenOper = Math.floor(Math.random() * operators.length);
  return operators[choosenOper];
}

function solveIt(number1, operator, number2) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      return NaN; 
  }
}

// гртовые прмеры
function solvedNumber(numCase) {
  for (let i = 0; i < numCase; i++) {
    const num1 = randomNum();
    const num2 = randomNum();
    const operator = randomOper();

    const caseNum = `Решите пример: ${num1} ${operator} ${num2}`;

    const userAnswer = prompt(caseNum);

    const result = solveIt(num1, operator, num2);

    if (userAnswer === result) {
      console.log('Верно!');
    } else {
      console.log(`Ошибочка. Правильный ответ: ${result}`);
    }
  }
}
solvedNumber(numCase);

/////////////////////////////////////////

function age(userName, birthYear, currentYear) {
  const year = currentYear - birthYear;
  return `\n Имя пользователя: ${userName}.\n Возраст пользователя: ${year}г.\n Текущий год: ${currentYear}.`;
}
do {
  var userName = prompt(`Put your name in bracket: `);
} while (userName == "");
do {
  var birthYear = parseInt(prompt("What year were you born: ", "1999"));
} while (birthYear == '');
do {
  var currentYear = parseInt(prompt("Put a current year: ", "1999"));
} while (currentYear == '');
const result = age(userName, birthYear, currentYear);
alert(result);

/////////////////////////////////////////