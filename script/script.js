'use strict';
const  income = 'Frilance',
       mission = 500000;
const money = +prompt('Ваш месячный доход?', '100'),
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит'),
      deposit = confirm('Есть ли у вас депозит в банке?', 'Нет'),
      expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата'),
      amount1 = +prompt('Во сколько это обойдется?', '5000'),
      expenses2 = prompt('Введите обязательную статью расходов?', 'Проездной'),
      amount2 = +prompt('Во сколько это обойдется?', '1000');

const budgetMonth = money - amount1 - amount2,
      budgetDay = Math.floor(budgetMonth / 30),
      period = Math.ceil(mission / budgetMonth);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));
console.log(`Бюджет на месяц: ${budgetMonth}`);
console.log(`Бюджет на день: ${budgetDay}`);
console.log(`Цель будет достигнута за ${period} месяцев(-а)`);

if(budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 1200 && budgetDay >=600){
    console.log('У вас средний уровень дохода');
}  else if (budgetDay < 600 && budgetDay >=0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}