//новый поиск 
console.log('поиск 2');

const searchInput1 = document.querySelector('.search__input');
console.log(searchInput1);
const searchBtn1 = document.querySelector('.search__btn');
console.log(searchBtn1);

searchBtn1.addEventListener('click', changeInput);
//слушаем изменения поля 
function changeInput(searchInput1) {
   return searchInput1.value;
};
let textInput = changeInput(searchInput1);
console.log(textInput);

