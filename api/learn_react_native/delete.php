<?php
    include 'koneksi.php';

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $id = $obj['id'];

    if(mysqli_query($koneksi, "DELETE FROM users WHERE id='$id'")){
        echo json_encode('delete successufully');
    }else{
        echo json_encode('delete failed');
    }

    mysqli_close($koneksi);

?>
