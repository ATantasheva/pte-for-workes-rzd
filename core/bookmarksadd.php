<?php
require_once 'config.php';

$title = trim($_POST['title']);
$text = trim($_POST['text']);
$userEmail = trim($_POST['userEmail']);
//var_dump($userEmail);

if ($title =='' OR $text==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT users.id, users.email FROM users WHERE email = '".$userEmail."'";
$result1 = $conn->query($sql); //читаем
$users_email = $result1->fetch_assoc(); // получается массив

   $sql2 = "INSERT INTO bookmarks (user, title, description) VALUES ('" .$users_email['id']. "', '".$title."', '".$text."')";
   //$result = $conn->query($sql2);

   if ($conn->query($sql2) === TRUE) {
      echo 1;
  }
    else {
   echo "Error: " . $sql2 . "<br>" . $conn->error;
   }
   $conn->close();

?>