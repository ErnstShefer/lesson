'use strict';
    import countTimer from './modules/countTimer';
    import toggleMenu from './modules/toggleMenu';
    import togglePopUp from './modules/togglePopUp';
    import tabs from './modules/tabs';
    import slider from './modules/slider';
    import changeFoto from './modules/changeFoto';
    import check from './modules/check';
    import calc from './modules/calc';
    import sendForm from './modules/sendForm';
    import maskPhone from './modules/maskPhone';
    // timer
    
    countTimer('13 august 2021');
    
    // Menu

    
    toggleMenu();



   // PopUp
  
  
  togglePopUp();



   // Табы 

  
  tabs();


  //slider 

 

  slider();

  //photo

 
  changeFoto();


  //atr

  
  check();

    // Калькулятор

  

  calc();

    // send-ajax-form

    
  sendForm();

    // маска для поля телефона
  maskPhone('#form1-phone, #form2-phone, #form3-phone');