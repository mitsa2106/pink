let hearts = document.querySelectorAll(".comment__likes--heart"); //ищем ВСЕ элементы, у которых есть класс comment__likes--heart.
hearts.forEach(function(item){  // Для каждого элемента hearts задаем функцию
  item.addEventListener("click", function() { // каждому событию Клик задаем функцию
    let addedExist = this.classList.toggle("added"); // делаем переключатель (если у элементов есть класс added, тогда мы его убираем и наоборот)

    item.childNodes.forEach(function (child) { // у текущего heart берем всех детей и перебираем
      if(child.classList.contains("comment__likes--number")){ //ищем ребенка с классом comment__likes--number
        if(addedExist) {
          child.textContent++; // добавляем один лайк
        } else {
          child.textContent--; // убираем один лайк
        }
      }
    })
  })
});

// Пример с одним лайком
// let heart = document.querySelector('.comment__likes--heart');
// let likesNumber = document.querySelector('.comment__likes--number'); // отображает число лайков
// //let counter = 0;    // переменная-счётчик, чтобы хранить количество лайков. Пока никто не кликнул, лайков нет.
//
// heart.onclick = function () {
//   // console.log(heart.classList.contains('added'));  //определяем, есть ли у элемента heart класс added
//   if (heart.classList.contains('added')) {       // Если у элемента heart есть класс added, значит, пользователь уже поставил лайк и теперь хочет его отменить. В этом случае мы должны уменьшить значение счётчика. Добавим в скрипт условную конструкцию: если класс у элемента есть, то значение счётчика уменьшается на 1.
//     likesNumber.textContent--;                   //переменную counter заменяем на likesNumber
//   } else {                                       //если условие if ложно, тогда иначе выполнять условие else
//     likesNumber.textContent++;                   // увеличивает значение counter(likesNumber.textContent) на 1, когда пользователь кликает на «сердечко»
//   }
//   // likesNumber.textContent= counter;
//   heart.classList.toggle('added');               // Когда пользователь ставит лайк, кнопке добавляется класс added, и «сердечко» становится полностью закрашенным. Когда лайк отменяют, класс added убирается, и кнопка возвращается в первоначальное состояние
// };

// Нам следует брать число лайков, которое уже есть на странице, и изменять именно его, поэтому убираем переменную counter и заменяем на likesNumber.textContent


