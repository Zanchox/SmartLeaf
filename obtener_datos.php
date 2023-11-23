<?php
// Datos de conexión a la base de datos
$servername = "sql313.infinityfree.com";
$username = "if0_35431975";
$password = "4RuTGEegjVa5";
$dbname = "if0_35431975_datos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del recibo más reciente (puedes ajustar esta consulta según tus necesidades)
$sql = "SELECT * FROM recibo ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output los datos en formato JSON
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "No se encontraron datos del recibo.";
}

// Cerrar conexión
$conn->close();
?>