
<?php
    $servername = 'localhost';
    $username = 'root';
    $password = 'info36sys91';
    $dbname='consultorio';
    

    //Crear conexión
    $conn = new mysqli($servername, $username, $password, $dbname);
    echo'conexión lista';
?>
