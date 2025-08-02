
      let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();
      
      function updateCalculation(value) {
        calculation += value;
        localStorage.setItem('calculation', calculation);
       // console.log(calculation);
        displayCalculation();
      }

      function displayCalculation() {
        document.querySelector('.js-calculator').innerHTML = calculation;
      }
    

   
  