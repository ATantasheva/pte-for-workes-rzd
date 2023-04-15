//Динамический адаптив - перекидка блока в др блок
//ДЛЯ РАЗОВЫХ функций
/* ВАЖНО
в html прописать блоку который перемещаем атрибут data-da="menu__body,3,640"
где menu__body - куда
3 - положение каким по счету
640 - на каком брейкпонте 
*/
// объявляем переменные 
//див где сидит изначально блок
const parent_original = document.querySelector('.bottom-header__column')
// див куда переместится блок
const parent = document.querySelector('.menu__body')
//сам блок который надо переместить
const item= document.querySelector('.actions-header')

//слушаем изменения размера экрана
window.addEventListener('resize', function(event) {
   const viewport_width = Math.max(document.documentElement.clientWidth, this.window.innerWidth || 0);
  //устанавливаем на каком разрешении перемещение
   if (viewport_width <= 640) { 
      //проверяем на наличие класса done чтобы перемещение было 1 раз
      if(!item.classList.contains('done')) {
         //премещаем item-блок внутрь див конечного parent
        parent.insertBefore(item, parent.children[0]); // позиция куда премещается в []
        item.classList.add('done');
      }
   } else {
      if(item.classList.contains('done')) {
         // позиция откуда премещается в []
         parent_original.insertBefore(item, parent_original.children[2]);
         item.classList.remove('done');
      }
   }
});
//===========================================================
// объявляем переменные 
//див где сидит изначально блок
const parent_original1 = document.querySelector('.info-header__column')
// див куда переместится блок
const parent1 = document.querySelector('.menu__body')
//сам блок который надо переместить
const item1 = document.querySelector('.info-header__callback')

//слушаем изменения размера экрана
window.addEventListener('resize', function(event) {
   const viewport_width = Math.max(document.documentElement.clientWidth, this.window.innerWidth || 0);
  //устанавливаем на каком разрешении перемещение
   if (viewport_width <= 640) { 
      //проверяем на наличие класса done чтобы перемещение было 1 раз
      if(!item1.classList.contains('done1')) {
         //премещаем item-блок внутрь див конечного parent
        parent1.insertBefore(item1, parent1.children[3]); // позиция куда премещается в []
        item1.classList.add('done1');
      }
   } else {
      if(item1.classList.contains('done1')) {
         // позиция откуда премещается в []
         parent_original1.insertBefore(item1, parent_original1.children[2]);
         item1.classList.remove('done1');
      }
   }
});
//===========================================================
// объявляем переменные 
//див где сидит изначально блок
const parent_original2 = document.querySelector('.info-header__column_cart')
// див куда переместится блок
const parent2 = document.querySelector('.contacts-header__column_cart')
//сам блок который надо переместить
const item2 = document.querySelector('.info-header__cart')

//слушаем изменения размера экрана
window.addEventListener('resize', function(event) {
   const viewport_width = Math.max(document.documentElement.clientWidth, this.window.innerWidth || 0);
  //устанавливаем на каком разрешении перемещение
   if (viewport_width <= 640) { 
      //проверяем на наличие класса done чтобы перемещение было 1 раз
      if(!item2.classList.contains('done2')) {
         //премещаем item-блок внутрь див конечного parent
        parent2.insertBefore(item2, parent2.children[1]); // позиция куда премещается в []
        item2.classList.add('done2');
      }
   } else {
      if(item1.classList.contains('done2')) {
         // позиция откуда премещается в []
         parent_original2.insertBefore(item2, parent_original2.children[1]);
         item2.classList.remove('done2');
      }
   }
});

