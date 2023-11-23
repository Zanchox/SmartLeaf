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

// Procesar los datos del recibo
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $color = $_POST['color'];
    $nombre = $_POST['Name'];
    $telefono = $_POST['Tel'];
    $direccion = $_POST['Adress'];
    $correo = $_POST['Email'];
    $cantidad = $_POST['contador']; // Ahora se recibe el valor del aumentador como la cantidad
    $producto = $_POST['producto'];
    $envio = "7.000";
    $total = $_POST['total'];

    // Insertar datos en la base de datos
    $sql = "INSERT INTO recibo (color, nombre, telefono, direccion, correo, cantidad, producto, envio, total)
            VALUES ('$color', '$nombre', '$telefono', '$direccion', '$correo', '$cantidad', '$producto', '$envio', '$total')";

    if ($conn->query($sql) === TRUE) {
        // Redirigir a la página de confirmación de compra
        header("Location: confirmacion_de_compra.html");
        exit(); // Asegura que el script se detenga después de la redirección
    } else {
        echo "Error al registrar los datos del recibo: " . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>