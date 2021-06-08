'use strict';
let isNumber = function(n){
  return  !isNaN(parseFloat(n)) && isFinite(n)
};


let  income = 'Frilance',
      mission = 500000;
let   money,
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит'),
      deposit = confirm('Есть ли у вас депозит в банке?', 'Нет');




let start = function(){

  do {
    money = prompt('Ваш месячный доход?');
  }

  while(!isNumber(money));

}

start();




const showTypeOf = function(data){
  console.log(typeof(data));
  };


let expenses1, expenses2;

const getExpensesMonth = function(param1, param2){
    let sum = 0;


      for( let i = 0; i < 2; i++) {

        if ( i ===  0) {
          expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
        } else if( i === 1) {
          expenses2 = prompt('Введите обязательную статью расходов?', 'Проездной');
        }


        do {
          sum += +prompt('Во сколько это обойдется?');
        } while(!isNumber(sum));
      
       
      }

      
       
      console.log(sum);

     return sum;
  };

let expensesAmount = getExpensesMonth();





const getAccumulatedMonth = function(a, b){
    return (a - b);
  };

const accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
const budgetDay = Math.floor(accumulatedMonth / 30)

const getTargetMonth = function(par1, par2){
  if(accumulatedMonth > 0){
    return Math.ceil(mission/accumulatedMonth);
  }
    return -1;
    
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

console.log('Расходы за месяц: ', expensesAmount);
console.log(addExpenses.toLowerCase().split(', '));

  if(getTargetMonth() > 0){
    console.log('Cрок достижения цели в месяцах: ', getTargetMonth(mission, accumulatedMonth));
  } else {
    console.log('Цель не будет достигнута')
  }

console.log(`Бюджет на день: ${budgetDay}`);
console.log(getStatusIncome());
