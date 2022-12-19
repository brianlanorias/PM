<?php
 $Username = $_POST ['Username'];
 $Email = $_POST ['Email'];
 $Password = $_POST ['Password'];
 
 $conn = new mysqli('localhost','root','','login-user');
 if($conn->connect_error){
     die('Connection Failed : '.$conn->connect_error);
 }else{
     $stmt = $conn->prepare("insert into registration(Username, Email, Password)values(?, ?, ?)");
    $stmt->bind_param("sss",$Username, $Email, $Password);
    $stmt->execute();
    header("Location: artisano.html"),
    $stmt->close();
    $conn->close();
 }

?>  