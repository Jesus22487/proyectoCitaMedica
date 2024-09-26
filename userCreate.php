<?php

    require 'db.php';

        /*El parametro debe ser igual al name que usamos en html */ 
        /* Obtenemos las variables del formulario */
        $nombre = $_POST ['nombre'];
        $apellido = $_POST ['lastNa'];
        $email = $_POST ['email'];
        $telefono = $_POST ['phone'];
        $hora = $_POST ['time'];
        $fecha = $_POST ['date'];
        $comentarios = $_POST ['comment'];

        /* creamos la instruccion para insertar registro en bd */
        $sql = "INSERT INTO citas (nombre, apellido, email, telefono, hora, fecha, comentarios)
        VALUES('$nombre', '$apellido', '$email' , '$telefono' , '$hora' , '$fecha' , '$comentarios')"; 

        /*Verificamos si la conexión es correcta y ejecutamos la instruccion para insertar */       
        if($conn->query($sql) === true)
        {
            echo'Registro creado exitosamente';
        }
        /* si la conexion es incorrecta o la esta mal nos regresa un error. */
        else
        {
            echo'Error: ' . $sql . '<br>' . $conn->error;
        }
        /* siempre se debe cerrar la conexion a la BD */
        $conn->close();   

    
?>