const accordion = () =>{

    const accordionWrap = document.getElementsByClassName('element');
    
    for ( let i = 0; i<accordionWrap.length; i++){
        accordionWrap[i].addEventListener('click' ,function(){
            this.classList.toggle('active')
        })
    }
    
    const addStyle = () => {
        let style = document.createElement('style');
        style.textContent = `
          .accordeon .element.active .element-content {
            display: block !important;
          }
          .accordeon .element-content {
            display: none !important;
          }
        `;
        document.head.appendChild(style);
      };
      addStyle();
};

export default accordion;