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

export default slider;