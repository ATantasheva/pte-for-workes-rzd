<?php
require_once 'config.php';

$userEmail = trim($_POST['userEmail']);
$title = trim($_POST['title']);
$text = trim($_POST['text']);
//$userEmail = trim($_POST['emailUser']);
//var_dump($userEmail);



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname) or die ("Ошибка" . mysqli_error($conn));



$sql = "SELECT users.id, users.email FROM users WHERE email = '".$userEmail."'";
$result1 = $conn->query($sql); //читаем
$users_email = $result1->fetch_assoc(); // получается массив


   $sql2 = "SELECT bookmarks.user,bookmarks.number, bookmarks.title, bookmarks.description FROM bookmarks WHERE user = '".$users_email['id']."'"; 
   $result = mysqli_query($conn, $sql2) or die ("Ошибка" . mysqli_error($conn));

$json_data =[];
 
     // $row = $result->fetch_assoc();
    // echo json_encode($row);
      // цикл для вывода всех 

     while ($row = $result->fetch_assoc()) {
      $json_data[] =$row;
     }
     echo json_encode($json_data,JSON_UNESCAPED_UNICODE);
    

   $conn->close();

?>