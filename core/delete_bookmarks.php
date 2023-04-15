<?php
require_once 'config.php';

$userEmail = trim($_POST['userEmail']);
$title = trim($_POST['title']);
$text = trim($_POST['text']);
$number = trim($_POST['number']);
//$userEmail = trim($_POST['emailUser']);




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname) or die ("Ошибка" . mysqli_error($conn));



$sql = "SELECT users.id, users.email FROM users WHERE email = '".$userEmail."'";
$result1 = $conn->query($sql); //читаем
$users_email = $result1->fetch_assoc(); // получается массив


//$sql2 = "SELECT bookmarks.user,bookmarks.number, bookmarks.title, bookmarks.description FROM bookmarks WHERE user = '".$users_email['id']."'"; 
$sql2 = "DELETE FROM `bookmarks` WHERE `bookmarks`.`number` = '".$number."'";
//$result = $conn->query($sql2);

if ($conn->query($sql2) === TRUE) {
   echo 1;
}
 else {
   echo 2;
//echo "Error: " . $sql2 . "<br>" . $conn->error;
}
$conn->close();

?>