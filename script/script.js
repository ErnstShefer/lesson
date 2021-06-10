'use strict';

let isNumber = function(n){
  return  !isNaN(parseFloat(n)) && isFinite(n)
};

const bot = function(){

  const botNumber = 50;

  function game(){

    const userNumber = prompt('Угадай число от 1 до 100');

    if (userNumber > botNumber) {
      alert('Загаданное число меньше');
      console.log(userNumber);
      bot();
    } 

    if (userNumber < botNumber && userNumber > 0){
      alert('Загаданное число больше');
      console.log(userNumber);
      bot();
    } 
    
    if (userNumber == botNumber){
      alert('Поздравляю, Вы угадали!!!');
    } 

    if (userNumber === null){
      console.log(userNumber);
      alert('Игра окончена');
      return;
    }

    if (!isNumber(userNumber)){
      console.log(userNumber);
      alert('Введи число!');
      bot();
    }
  }
  game();
};

bot();