let lastResFind = "";
let copy_page = "";
const allBlocks = document.querySelector('.order__main');
console.log(allBlocks);
function TrimStr(s) { //удаляем пробелы
   s = s.replace(/^\s+/g, '');
   return s.replace(/\s+$/g, '');
}
function FindOnPage(inputId) {
   let obj = document.getElementById(inputId);
   console.log(obj);
   let textToFind;
   if (obj) {
      textToFind = TrimStr(obj.value);
   } else {
      alert("Введенная фраза не найдена");
      return;
   }
   if (textToFind == "") {
      alert("Вы ничего не ввели");
      return;
   }
   if (allBlocks.innerHTML.indexOf(textToFind) == "-1")
      alert("Ничего не найдено, проверьте правильность ввода!");
   if (copy_page.length > 0) {
      allBlocks.innerHTML = copy_page;
   }
   else {
      copy_page = allBlocks.innerHTML;
   }
   //перерисовка
   allBlocks.innerHTML = allBlocks.innerHTML.replace(eval("/name=" + lastResFind + "/g"), " ");
   allBlocks.innerHTML = allBlocks.innerHTML.replace(eval("/" + textToFind + "/g"),
      "<a class=yellow id=scroll data-input=" + textToFind + " style='background:#FFF820'>" + textToFind + "</a>");
   lastResFind = textToFind;

   //ищем все желтые
   let searchLink = document.querySelectorAll('[data-input]');
   console.log(searchLink);

   //переводим в массив
   /*
   let searchLinkArray = Array.from(searchLink);
   console.log(searchLinkArray);
   */


   //счетчик 
   const counters = document.querySelector('[data-counter]');
   counters.classList.add('show'); //поках счетчик

   let inputCount = document.querySelector('.search-counter');//текст чисел
   console.log(inputCount);
   //кнопки
   const counterBtnPlus = document.querySelector('.counter__button_plus');
   const counterBtnMin = document.querySelector('.counter__button_min');



   //counters.classList.add('show'); // показать при нажатии кнопки найти внутри функциии поиска
   let activeItemIndex = 0;
   //let value = document.querySelector('.counter__input').value;
   //value = Number(value);

   let value = activeItemIndex + 1;
   console.log(value);
   inputCount.innerHTML = `${value} из ${searchLink.length}`;
   counterBtnMin.addEventListener('click', prev);
   counterBtnPlus.addEventListener('click', next);

   function prev() {
      activeItemIndex--;
      console.log(activeItemIndex);
      if (activeItemIndex <= 0) {
         activeItemIndex = 0;
         value = activeItemIndex + 1;
         console.log(value);
         inputCount.innerHTML = `${value} из ${searchLink.length}`;
         searchLink[activeItemIndex].scrollIntoView({behavior: 'smooth' });
      } else {
         value = activeItemIndex;
         console.log(value);
         inputCount.innerHTML = `${value} из ${searchLink.length}`;
         searchLink[activeItemIndex].scrollIntoView({behavior: 'smooth' });
      }

   }
   function next() {
      activeItemIndex++;
      console.log(activeItemIndex);
      if (activeItemIndex > searchLink.length) {
         activeItemIndex = searchLink.length;
         value = activeItemIndex;
         console.log(activeItemIndex);
         inputCount.innerHTML = `${value} из ${searchLink.length}`;
         searchLink[activeItemIndex].scrollIntoView({ behavior: 'smooth' });
      } else {

         value = activeItemIndex;
         inputCount.innerHTML = `${value} из ${searchLink.length}`;
         searchLink[activeItemIndex].scrollIntoView({ behavior: 'smooth' });
      }

   }
   let userEmailsearch = getCookie('email');
   console.log(userEmailsearch);
   if(userEmailsearch) {
      // Получение выделенного текста с помощью анонимной самовызывающейся функции.
function get_text() {
   // Объявление переменной.
   let text;
   let textarea = document.querySelector('.textarea');
   if (window.getSelection) {
      // Современный способ.
      text = window.getSelection().toString();
   } else if (document.getSelection) {
      // Старый способ.
      text = document.getSelection();
   } else if (document.selection) {
      // IE.
      text = document.selection.createRange().text;
   }

   // Вывод результата, если получен выделенный текст.
   if (text) {
      textarea.innerHTML = `${text}`;
      console.log(textarea);
   }
}

// Применять эту функцию к тегам, содержащим текстовую информацию.
var p_arr = document.getElementsByTagName("p");

for (var i = 0; i < p_arr.length; i++) {
   p_arr[i].onmouseup = get_text;
}

   }
}