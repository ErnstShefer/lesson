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

  export default toggleMenu;