'use strict';

const start = document.getElementById('start'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheckbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'), // инпут бюджет
    incomeTitle = document.querySelector('.income-items .income-title'),
    expensesTitle = document.querySelector('.expenses-items .expenses-title'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodAmount = document.querySelector('.period-amount');
  
let expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    periodSelect = document.querySelector('.period-select'), // ползунок
    incomeItems = document.querySelectorAll('.income-items');

const appData = {
  budget: 0, // ЗП на месяц
  budgetDay: 0, // остаток на день
  budgetMonth: 0, // остаток на месяц
  income: {}, // дополнительный доход
  incomeMonth: 0, // сумма доходов за месяц
  addIncome: [],
  expenses: {}, // объект с расходами на месяц
  expensesMonth: 0, // сумма расходов за месяц
  addExpenses: [], // Возможные расходы
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,

  start: function () {
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome(); // -
    appData.getExpensesMonth(); 
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getIncomeMonth();
    appData.getBudget(); 
    appData.showResalt();
    // appData.getStatusIncome();
    // appData.getInfoDeposit();

  },
  showResalt: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();
    incomePeriodValue.value = appData.budgetMonth * periodSelect.value; // для вывода периода равного 1
    periodSelect.addEventListener('input', function() {  // для вывода остальных периодов
      periodAmount.textContent = '1';
      periodAmount.textContent = periodSelect.value; 
      incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
    });
  },
  addExpensesBlock: function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    }
  },
  addIncomeBlock: function(){
    let cloneExpensesItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneExpensesItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
    }
  },
  getExpenses: function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      } 
    });
  },
  getIncome: function(){
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if(itemIncome !== '' && cashIncome !== ''){
        appData.income[itemIncome] = cashIncome;
      } 
    });
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getIncomeMonth: function(){
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = (appData.budget + appData.incomeMonth - appData.expensesMonth);
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      return ('Что то пошло не так');
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = +prompt('Какой годовой процент?', 10);
      while (isNaN(appData.percentDeposit) || appData.percentDeposit === null || appData.percentDeposit === 0) {
        appData.percentDeposit = +prompt('Какой годовой процент?', 10);
      }
      appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
      while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === null || appData.moneyDeposit === 0) {
        appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
      }
    }
  },
  // calcPeriod: function(){
  //   periodSelect.addEventListener('input', function() {
  //     periodAmount.textContent = periodSelect.value; 
  //   });
  //   periodAmount.textContent = '1';
  //   return appData.budgetMonth * periodSelect.value;
  // }
};

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n) ;
};

// деактивация кнопки Старт при пустом инпуте
start.disabled = true;
salaryAmount.addEventListener('input', function(){
  if(isNumber(salaryAmount.value)){
    start.disabled = false;
    start.addEventListener('click', appData.start);
  } else {start.disabled = true;
  }
});

// Назначения кнопок
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

