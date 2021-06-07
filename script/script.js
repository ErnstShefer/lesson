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



const showTypeOf = function(data){
  console.log(typeof(data));
  };


const getExpensesMonth = function(param1, param2){
    return (param1 + param2);
  };


const getAccumulatedMonth = function(a, b){
    return (a - b);
  };

const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
const budgetDay = Math.floor(accumulatedMonth / 30)

const getTargetMonth = function(par1, par2){
    return Math.ceil(par1 / par2);
  };

  const getStatusIncome = function(){
    if (budgetDay >= 1200){
      return ('У вас высокий уровень дохода');
    } 
    else if (budgetDay >= 600 && budgetDay < 1200){
      return ('У вас средний уровень дохода');
    } 
    else if (budgetDay >= 0 && budgetDay < 600){
      return ('К сожалению у вас уровень дохода ниже среднего');
    } 
    else {
      return ('Что то пошло не так');
    }
  };

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц: ', getExpensesMonth(amount1, amount2));
console.log(addExpenses.toLowerCase().split(', '));
console.log('Cрок достижения цели в месяцах: ', getTargetMonth(mission, accumulatedMonth));
console.log(`Бюджет на день: ${budgetDay}`);
console.log(getStatusIncome());
