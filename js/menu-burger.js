"use strict"
//код для определения на каком усройтве открыт сайт
console.log('бургер');
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
// проверяем усл где открыт сайт и доб определенный класс
if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

//Меню бургер

const htmlEl = document.documentElement;
const headEl = document.head;
const bodyEl = document.body;
console.log(bodyEl);
const header = document.querySelector('.header');
console.log(header);

//получаем меню nav
const menuBody = document.querySelector('.menu__body');
console.log(menuBody);
//получаем бургер-меню
const menuIcon = document.querySelector('.menu__icon');
console.log(menuIcon);

//проверяем есть ли меню-бургер
if(menuIcon) {
//вешаем событие клик
   menuIcon.addEventListener('click', function(e) {
      //запрет скролла страницы под меню
      document.body.classList.toggle('lock');
      menuIcon.classList.toggle('active');
      menuBody.classList.toggle('active');
      console.log('клик');
   });
   } else {
      document.body.classList.remove('lock');
				menuIcon.classList.remove('active');
				menuBody.classList.remove('active');
   }
   //закрытие меню 
   //созд конст menuLinks которая будет искать класс .menu__link
//const menuLinks = document.querySelectorAll('.menu__link');
//условие menuLinks существует
/*
if (menuLinks) {
   //циклом перебираем все классы .menu__link
	menuLinks.forEach(menuLink => {
      //вешаем событие клик и функцию
		menuLink.addEventListener("click", onMenuLinkClick);
	});


	function onMenuLinkClick(e) {
      // при клике на конкретный линк
		const menuLink = e.target;
	// при условии что бургер актив
			if (menuIcon.classList.contains('active')) {
            //удаляем классы и меню боди уезжает
				document.body.classList.remove('lock');
				menuIcon.classList.remove('active');
				menuBody.classList.remove('active');
			}
		}
	}
*/