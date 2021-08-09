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

  export default changeFoto;