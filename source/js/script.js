// 1.КНОПКА МЕНЮ БУРГЕР (ОТКРЫТЬ/ЗАКРЫТЬ)
// Создаем переменную и присваиваем ей значение
let header = document.querySelector('.page-header__logo-wrap');
let nav = document.querySelector('.main-nav');
let main = document.querySelector('.page-main');

// querySelector ищет элементы с классом .page-header__logo-wrap и .main-nav
console.log(header);
console.log(nav);
console.log(main);

// // Метод classList.remove убирает с элемента тот класс, который указан в скобках
// header.classList.remove('page-header__logo-wrap--nav-opened');
// nav.classList.remove('main-nav--opened');
// main.classList.remove('page-main--nav-opened');
//
// // Метод classList.add добавляет элементу класс, указанный в скобках
// header.classList.add('page-header__logo-wrap');
// nav.classList.add('main-nav--closed');
// main.classList.add('page-main');

// Находим кнопку (меню бургер/крестик) и сохраняем её в переменную:
let buttonToggle = document.querySelector('.main-nav__toggle');

// Указываем JavaScript, что делать, когда по этой кнопке кликнут. Это может быть, например, вывод сообщения в консоль:
buttonToggle.onclick = function() {
  console.log('Клик по кнопке!');
  // Переключаем меню-бургер при каждом клике, чтобы классы менялись открыть/закрыть/открыть
  nav.classList.toggle('main-nav--closed');
  header.classList.toggle('page-header__logo-wrap--nav-opened');
  nav.classList.toggle('main-nav--opened');
  main.classList.toggle('page-main--nav-opened');
};








