
<?php
require_once 'config.php';

$name = trim($_POST['name']);
$pass1 = trim($_POST['password1']);
$pass2 = trim($_POST['password2']);
$email = trim($_POST['email']);


if ($name =='' OR $pass1=='' OR $email=='' OR $pass2==''){
    echo 2;
    die;
}
//проверка на совпадение пароля
if($pass1 != $pass2) {
   echo 3;
   die;
}

 // проверка на правильность написания Email
 if (!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $email)) {
   echo 4;
   die;
}
// проверка на правильность написания Email

if(filter_var($email, FILTER_VALIDATE_EMAIL) == false) {
   echo 4;
   die;
}


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, email, password, password2) VALUES ('".$name."', '".$email."', '".$pass1."', '".$pass2."')";



if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
 //  echo 5; //проверка уникальности почты тк в БД индекс уникальности
 echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
