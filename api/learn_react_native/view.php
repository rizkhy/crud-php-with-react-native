<?php

include 'koneksi.php';

$result = mysqli_query($koneksi, "SELECT * FROM user");
if(mysqli_num_rows($result)){
    while($row[] = mysqli_fetch_assoc($result)){
        $json = json_encode($row);
    }
}else{
    echo 'result not found';
}
echo $json;

mysqli_close($koneksi);
