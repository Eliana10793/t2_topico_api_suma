<?php
    $numero1 = $_POST['numero1'];
    $numero2 = $_POST['numero'];
    
    $resultado=$numero1+$numero2;

    echo json_encode($resultado);
?>