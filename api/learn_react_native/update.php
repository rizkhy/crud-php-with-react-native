<?php
    include 'koneksi.php';

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $id = $obj['id'];
    $name = $obj['name'];
    $email = $obj['email'];
    $phone = $obj['phone'];

    if(mysqli_query($koneksi, "UPDATE users set name='$name', email='$email', phone='$phone' WHERE id='$id'")){
        echo json_encode('update successufully');
    }else{
        echo json_encode('update failed');
    }

    mysqli_close($koneksi);

?>
