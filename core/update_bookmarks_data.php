<?php
require_once 'config.php';

//$email= trim($_POST['email']);
$title= trim($_POST['title']);
$text= trim($_POST['text']);
$number= trim($_POST['number']);
$userEmail = trim($_POST['userEmail']);
//$birthday= trim($_POST['birthday']);
//var_dump($title);

if ($userEmail ==''){
    echo 2;
    die;
}

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

/*
$sql1 = "SELECT users.id, users.email FROM users WHERE email = '".$userEmail."'";
$result1 = $conn->query($sql1); //читаем
$users_email = $result1->fetch_assoc(); // получается массив
*/
//$sql2 = "SELECT bookmarks.user, bookmarks.title, bookmarks.description FROM bookmarks WHERE user = '".$users_email['id']."'"; 
$sql = "UPDATE bookmarks SET title='".$title."', description='".$text."' WHERE `bookmarks`.`number` = '".$number."'";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
   echo 3;
   // echo "Error updating record: " . $conn->error;
}

$conn->close();
?>