

<?php
//подкл БД
$connect = mysqli_connect('localhost', 'root', 'root', 'registration');
//проверка соедин с БД
if(!$connect) {
   die('ошибка');
}
?>