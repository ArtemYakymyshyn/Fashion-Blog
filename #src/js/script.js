const eyeColor = 'Grün / Green / Зелений';
console.log(eyeColor)
const burger = document.querySelector('.headerLine-burgerWrapper');
const elementTwo = document.querySelector('.headerLine-elementTwo');
burger.addEventListener('click', (e) => {

   elementTwo.classList.toggle('headerLine-elementTwo__activi');
   burger.classList.toggle('headerLine-burgerWrapper__activi');
});