"use strict";

var eyeColor = 'Grün / Green / Зелений';
console.log(eyeColor);
var burger = document.querySelector('.headerLine-burgerWrapper');
var elementTwo = document.querySelector('.headerLine-elementTwo');
burger.addEventListener('click', function (e) {
  elementTwo.classList.toggle('headerLine-elementTwo__activi');
  burger.classList.toggle('headerLine-burgerWrapper__activi');
});