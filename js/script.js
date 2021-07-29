window.addEventListener('DOMContentLoaded', function() {
    'use strict';
  
    // timer
    function countTimer(deadline) {
      let timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector('#timer-minutes'),
          timerSeconds = document.querySelector('#timer-seconds');
  
      function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
          return {timeRemaining, hours, minutes, seconds};
      }
      const zero = str => str < 10 ? `0${str}` : str;
      function updateClock(){
        let timer = getTimeRemaining();
        timerHours.textContent = zero(timer.hours);
        timerMinutes.textContent = zero(timer.minutes);
        timerSeconds.textContent = zero(timer.seconds);
      }
      let idInterval = setInterval(updateClock, 1000),
          timer = getTimeRemaining().timeRemaining;
  
      if (timer === 0 || timer < 0) {
          timerHours.textContent = '00';
          timerMinutes.textContent = '00';
          timerSeconds.textContent = '00';
          clearInterval(idInterval);
      }
  
    }
    countTimer('29 july 2021');
    
    // Menu

    const toggleMenu = () => {
      const menu = document.querySelector('menu'),
            allDocument = document.querySelector('html');
      
      const handlerMenu = () => {
        menu.classList.toggle('active-menu');
      };
      
      allDocument.addEventListener('click', (event) =>{
        let currentClick = event.target;
        currentClick = currentClick.closest('.col-md-1');
        if(currentClick){
          handlerMenu();
        } else {
          currentClick = event.target;
        }
        currentClick = currentClick.closest('menu');
        if(currentClick){
          handlerMenu();
        }
      });
    };
    toggleMenu();



   // PopUp
   const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupContent = document.querySelector('.popup-content');

    let count = 0;
    let flyInterval;
    let flyAnimate = () => {
      count++;
      if(count < 60.1){
        popupContent.style.transform = `rotate(${count * 6}deg)`;
      } else {
        cancelAnimationFrame(flyInterval);
        count = 0;
        return;
      }
      flyInterval = requestAnimationFrame(flyAnimate);
    };
    
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        if(document.documentElement.clientWidth < 768){
          popup.style.display = 'block';
        } else {
          popup.style.display = 'block';
          flyInterval = requestAnimationFrame(flyAnimate);
        }
      });
    });
    
    popup.addEventListener('click', (event) => {
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if(!target){
          popup.style.display = 'none';
        }
      }
    });
  };
  
  togglePopUp();



   // Табы 

   const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++){
        if(index === i){
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if(target){
        tab.forEach((item, i) => {
          if(item === target){
              toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();


  //slider 

  const slider = () => {

      const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            dotParent = document.querySelector('.portfolio-dots');
      
      let currentSlide = 0,
          Intervall;


          for (let i = 0; i < slide.length; i++) {
            const dots = document.createElement('li');
            dots.className = 'dot';
            dotParent.appendChild(dots);
          }
          const dot = document.querySelectorAll('.dot');
                dot[0].classList.add('dot-active');

      
      const autoPlaySlide = () => {

        slide[currentSlide].classList.remove('portfolio-item-active');
        dot[currentSlide].classList.remove('dot-active');
        currentSlide++;
        if (currentSlide >= slide.length){
          currentSlide = 0;
        }
        slide[currentSlide].classList.add('portfolio-item-active');
        dot[currentSlide].classList.add('dot-active');

      };

      const startSlide = (time = 3000) => {

        Intervall = setInterval(autoPlaySlide, time);

      };

      const stopSlide = () => {
          clearInterval(Intervall);
      };


      slider.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(!target.matches('#arrow-right, #arrow-left, .dot')){
          return;
        }

        slide[currentSlide].classList.remove('portfolio-item-active');
        dot[currentSlide].classList.remove('dot-active');

        if(target.matches('#arrow-right')){
          currentSlide++;
        } else if (target.matches('#arrow-left')){
          currentSlide--;
        } else if (target.matches('.dot')){
          dot.forEach((elem,index) => {
            if (elem === target){
              currentSlide = index;
            }
          });
        }

        if(currentSlide >= slide.length){
          currentSlide = 0;
        }

        if (currentSlide < 0) {
          currentSlide = slide.length -1;
        }

        slide[currentSlide].classList.add('portfolio-item-active');
        dot[currentSlide].classList.add('dot-active');

      });

      slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
          stopSlide();
        }
      });

      slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
          startSlide();
        }
      });

      startSlide(3000);

  };

  slider();

  //photo

  const changeFoto = () => {
    document.addEventListener('mouseover', (event) => {
      const target = event.target;
      if(target.closest('.command__photo')){
        [target.src, target.dataset.img] = [target.dataset.img, target.src];
      }
    });
    document.addEventListener('mouseout', (event) => {
        const target = event.target;
        if(target.closest('.command__photo')){
          [target.src, target.dataset.img] = [target.dataset.img, target.src];
        }
    });
  };
  changeFoto();


  //atr

  const check = () =>{
    const calcBlock = document.querySelector('.calc-block');
    calcBlock.addEventListener('input', (event) => {
      if(event.target.closest('.calc-square, .calc-count, .calc-day')){
        event.target.value = event.target.value.replace(/\D/g, '');
      }
    });

    document.addEventListener('input', (event) => {
      const target = event.target;
      if(target.closest('#form1-name, #form2-name, #form2-message')){
        target.value = target.value.replace(/[^а-яё\-\s]/gi,'');
      }
      if(event.target.closest('#form1-email, #form2-email')){
        target.value = target.value.replace(/[а-яё0-9+^$\][}{)(?/]/gi, '');
      }
      if(event.target.closest('#form1-phone, #form2-phone')){
        target.value = target.value.replace(/[^0-9\-)()]/gi, '');
      }
    });

    const input = document.querySelectorAll('input'),
          name1 = document.getElementById('form1-name'),
          name2 = document.getElementById('form2-name');
      input.forEach((elem) => {
        elem.addEventListener('blur', () => {
          elem.value = elem.value.replace(/\s+/g, ' ')
                                 .replace(/\-+/g, '-')
                                 .replace(/^\-*\s*\-*|\-*\s*\-*$/g, '')
                                 .replace(/^\s*\-*\s*|\s*\-*\s*$/g, '').trim();
          name1.value = name1.value.replace(/([а-яё])([а-яё]+)/gi, (match, val1, val2) => val1.toUpperCase() + val2);
          name2.value = name2.value.replace(/([а-яё])([а-яё]+)/gi, (match, val1, val2) => val1.toUpperCase() + val2);
      });
    });

    };
    check();

    // Калькулятор

    const calc = (price = 100) => {
      const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

  
            
  
      const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;
  
        if(calcCount.value > 1){
          countValue += (calcCount.value - 1) / 10;
        }
  
        if(calcDay.value && calcDay.value < 5){
          dayValue *= 2;
        } else if(calcDay.value && calcDay.value < 10){
          dayValue *= 1.5;
        } 
  
        if(typeValue && squareValue){
          total = price * typeValue * squareValue * countValue * dayValue;
        }
        
        totalValue.textContent = total;

      };
  

      calcBlock.addEventListener('change', (event) =>{
        const target = event.target;
        if(target.matches('select') || target.matches('input')){
          countSum();
        }
        
      });


    };

    calc();

    // send-ajax-form

    const sendtForm = () => {

      const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMesage = 'Спасибо! Мы скоро с вами свяжемся!';

    
      const input = document.querySelectorAll('input');
      maskPhone('#form3-phone');
      maskPhone('#form2-phone');
      maskPhone('#form1-phone');


      const statusMessage = document.createElement('div');
      statusMessage.style.cssText = 'font-size: 2rem;';
      statusMessage.style.color = 'white';
      
      
    
      
      document.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        target.appendChild(statusMessage);

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
          statusMessage.textContent = loadMessage;

          if (request.readyState !== 4){
            return;
          }

          if (request.status === 200){
            statusMessage.textContent = successMesage;
          } else {
            statusMessage.textContent = errorMessage;
          }
        })


        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        const formData = new FormData(target);

        let body = {};
        for (let val of formData.entries()){

          body[val[0]] = val[1]
          
          input.forEach((item) => {
            item.value = '';
          });
        }
       
        request.send(JSON.stringify(body));

      })
      

    }

    sendtForm();

  });