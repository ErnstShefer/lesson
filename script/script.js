'use strict';
// const money = 700;
// const income = "Frilance";
// const addExpenses = "Интренет, Телефон, Бензин";
// const deposit = true;
// const mission = 2000;
// const period  = 12;


// console.log(money, income, deposit);
// console.log(addExpenses.length);
// console.log('Период равен ' +  period  + ' месяцев' + ' Цель заработать ' + mission  + ' Рублей' );
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split( ' ' ));

// const budgetDay = Math.floor(budgetMonth / 30);
// console.log(budgetDay);
const  income = 'Frilance',
      mission = 500000;
const money = +prompt('Ваш месячный доход?', '100');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
const deposit = !!prompt('Есть ли у вас депозит в банке?', 'Нет');
const expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
const expenses2 = prompt('Введите обязательную статью расходов?', 'Проездной');
const amount2 = +prompt('Во сколько это обойдется?', '1000');
const amount1 = +prompt('Во сколько это обойдется?', '5000');
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