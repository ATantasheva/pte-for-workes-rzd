//для ajax запроса - вязка php

//регистрация 

document.querySelector('.signup-submit').onclick = function (event) {
   event.preventDefault();
   console.log('work');
   //получаем .value из переменных
   let name = document.querySelector('.signup-name').value;
   let email = document.querySelector('.signup-email').value;
   let pass1 = document.querySelector('.signup-password1').value;
   let pass2 = document.querySelector('.signup-password2').value;
   //сформировать массив для ajax

   //ВНИМАНИЕ!! имена ключей должны совпадать с стр trim($_POST['name']) в php
   let data = {
      "name": name,
      "email": email,
      "password1": pass1,
      "password2": pass2,
   }
   //вызываем ajax-запрос
   //core/signup.php - куда login - имя функции обработки data - массив который передаем
   ajax('core/signup.php', 'POST', singup, data);

   function singup(result) {
      console.log(result);
      if (result == 2) {
         alert('Заполните поля');
      }
      else if (result == 1) {
         alert('Успех. Теперь можно войти!');
      }
      else if (result == 3) {
         alert('Повторный пароль введен не верно!');
      }
      else if (result == 4) {
         alert('Неверно введен е-mail.');
      }
      else if (result == 5) {
         alert('Пользователь с таким Email существует!');
      }
      else {
         alert('Пользователь с таким Email существует!');
      }
   }

}

//вход
document.querySelector('.login-submit').onclick = function (event) {
   event.preventDefault();
   console.log('enter');
   //получаем .value из переменных
   let email = document.querySelector('.login-email').value;
   let pass1 = document.querySelector('.login-password1').value;
   //сформировать массив для ajax

   //ВНИМАНИЕ!! имена ключей должны совпадать с стр trim($_POST['name']) в php
   let data = {
      "email": email,
      "password1": pass1,
   }
   //вызываем ajax-запрос
   //core/signup.php - куда login - имя функции обработки data - массив который передаем
   ajax('core/login.php', 'POST', login, data);

 
   function login(result) {
      if (result == 2) {
         alert('Заполните поля');
      }
      else if (result == 0) {
         alert('Пользователь не найден');
      }
      else {
         console.log(result);
         //установка куки 
         result = JSON.parse(result);
         let d = new Date();
         d.setTime(d.getTime() + (30 * 60 * 1000)); //сутки 24*60*60*1000
         let expires = d.toUTCString();
         document.cookie = `email=${result.email}; expires=${expires}; path=/`;
         
         location.href = "cabinet.php";
      }
   }
 
}
//=====================================================================================



