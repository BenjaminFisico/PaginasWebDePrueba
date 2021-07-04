<?php
    class BaseDatos extends SQLite3
    {
        function __construct(){
            $this->open("mydatabase.db");
        }
    }

    $db = new BaseDatos();
    if($db) {
        echo "<p> la conexion a sido exitosa  :D";
    } else {
        echo "<p> la conexion no a sido exitosa  D:";
    }
    
?>