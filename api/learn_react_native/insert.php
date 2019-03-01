<?php
include 'koneksi.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$name = $obj['name'];
$email = $obj['email'];
$phone = $obj['phone'];

$sql = "INSERT INTO user (name, email, phone) VALUES ('$name', '$email', '$phone')";
// echo $sql;
if(mysqli_query($koneksi, $sql)){
  echo json_encode(["text" => "Insert Success"]);
}else{
  echo json_encode(["text" => "Insert Failed"]);
}

mysqli_close($koneksi);

 ?>
