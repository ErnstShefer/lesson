'use strict';

import toggleMenu from './modules/toggleMenu';
import accordion from './modules/accordion';
import scrolls from './modules/scrolls';
import slider from './modules/slider';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/SliderCarousel';

accordion();
toggleMenu();
scrolls();
slider(3000, true);
sendForm();

const carousel = new SliderCarousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    next: '.arrow-right',
    prev: '.arrow-left',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
      breakpoint: 1024, 
      slidesToShow: 3,
    },
    {
      breakpoint: 768, 
      slidesToShow: 2,
    },
    {
      breakpoint: 576, 
      slidesToShow: 1,
    },
    ]
  });
  carousel.init();

  maskPhone('.tel');

