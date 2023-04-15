'use strict'
//все подгрузилось
window.onload = () => {
   console.log(1);
}
//========================================================================



//==========================================================================
//спойлеры для навигации слева
//блок раздела
const block = document.querySelectorAll('.block');
console.log(block);
//текст раздела
const blockText = document.querySelectorAll('.block__text');
console.log(blockText);
//кнопку раздела
const blockBtn = document.querySelectorAll('.block__title');
console.log(blockBtn);
const blockItem = document.querySelectorAll('.block__item');
console.log(blockItem);
block.forEach(el => {
   console.log(el);
   el.classList.add('_init');
})

blockBtn.forEach(btn => {
   btn.addEventListener('click', showSpoller)
});
function showSpoller(e) {
   const event = e.target;
   event.classList.toggle('_active');
   const itemText = event.nextElementSibling;
   console.log(itemText);
   itemText.classList.toggle('_active');
}
//==========================================================================================================
//скрыть показать приказ 
const order = document.querySelector('.order');
const orderBtn = document.querySelector('.order__btn');

orderBtn.addEventListener('click', function () {
   order.classList.toggle('show');

   if (order.classList.contains('show')) {
      orderBtn.innerHTML = 'Скрыть документ';
   } else {
      orderBtn.innerHTML = 'Показать документ';
   }
});
//============================================================================================================================



//=====================================================================================
//кнопка оглавление на 992
const contentBtn = document.querySelector('.content__btn');
console.log(contentBtn);
const asideSection = document.querySelector('.aside__section');
const asideLink = document.querySelectorAll('.aside__link');


contentBtn.addEventListener('click', showAside);

function showAside() {

   contentBtn.innerText = 'скрыть содержание';
   asideSection.classList.toggle('show');
   if (asideSection.classList.contains('show')) {
      contentBtn.innerText = 'скрыть содержание';
      //asideSection.classList.remove('show');
   } else {
      contentBtn.innerText = 'содержание';
   }

}
//циклом перебираем все классы .menu__link
asideLink.forEach(menuLink => {
   //вешаем событие клик и функцию
   menuLink.addEventListener("click", onAsideLink);
});

function onAsideLink(e) {
   // при клике на конкретный линк
   const menuLink = e.target;
   console.log(menuLink);
   // при условии что бургер актив
   if (asideSection.classList.contains('show')) {
      contentBtn.innerText = 'содержание';
      //удаляем классы и меню боди уезжает
      asideSection.classList.remove('show');
   }
}

//=========================================================================================================================
//поп-ап вход и регистрация
const popupLinks = document.querySelectorAll('.popup-link');
console.log(popupLinks);
const body = document.querySelector('body');
const formButtonBookmarks = document.querySelectorAll('.form__button'); //кнопка сохр закладку данн профиля
console.log(formButtonBookmarks);

const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});
//прик клике на кнопки сохр дан профиля и создать закладку
formButtonBookmarks.forEach(btnBook => function () {
   btnBook.addEventListener('click', popupClose);
   console.log('закрыть');
})

/*
   (function () {
      // проверяем поддержку
      if (!Element.prototype.closest) {
         // реализуем
         Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
               if (node.matches(css)) return node;
               else node = node.parentElement;
            }
            return null;
         };
      }
   })();
(function () {
   // проверяем поддержку
   if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})();
*/
//==============================================================================================
//валидация формы регистрации на заполнение полей

const form = document.getElementById('form');
const formButton = document.querySelector('.form__button');

formButton.addEventListener('click', toSendForm);
function toSendForm(e) {
   e.preventDefault();
   let error = formValidate(form);
   if (error === 0) {
      //alert('все ок');
      form.reset();
   }
   else {
      //	alert('Заполните обязательные поля!');
   }
}

function formValidate(form) {
   let error = 0;
   let formReq = document.querySelectorAll('._req');
   for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('_email')) {
         if (emailTest(input)) {
            formAddError(input);
            error++;
         }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
         formAddError(input);
         error++;
      } else if (input.classList.contains('password') || input.classList.contains('password1')) {
         if (passwordTest(input)) {
            formAddError(input);
            error++;
         }
      }
      else {
         if (input.value === '') {
            formAddError(input);
            error++;
         }
      }
   }
   return error;
}
function formAddError(input) {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
}
function formRemoveError(input) {
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
}
//Функция теста email
function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//функция чтобы пароли были одинаковые
function passwordTest(input) {
   let pass1 = document.querySelector('.password').value;
   let pass2 = document.querySelector('.password1').value;
   if (pass1 !== pass2) {
      //alert('Введенные пароли НЕ совпадают');
   }
}

//======================================================================================================================
// функция возвращает cookie с именем name, если есть, если нет, то undefined    

function getCookie(name) {
   let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
   cookiewin = document.getElementsByClassName('cookie_notice')[0];
console.log(cookiewin);
console.log(cookiecook);
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
   // показываем    
   cookiewin.style.display = "block";
   // закрываем по клику
   document.getElementById("cookie_close").addEventListener("click", function () {
      cookiewin.style.display = "none";
      // записываем cookie на 2 дня, с которой мы не показываем окно
      let date = new Date;
      date.setDate(date.getDate() + 2);
      document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
   });
} 