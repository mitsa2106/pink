// 1.ОТПРАВЛЯЕМ ФОРМУ:
let someForm = document.querySelector('.form');
form.onsubmit = function() {
  console.log('Форма отправлена!');
};

// 2.после того, как пользователь ПРАВИЛЬНО заполнит и отправит форму анкеты, на странице должно появиться сообщение
let success = document.querySelector('.modal--success')
console.log(success.textContent);
// закроем окно:
let modalClose = document.querySelector('.modal__btn--close');
console.log(modalClose);
modalClose.onclick = function() {
  console.log('Клик по кнопке!');
  дополнить.classList.toggle('дополнить'); //при клике окно закроется
};

