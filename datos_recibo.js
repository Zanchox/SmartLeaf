document.addEventListener("DOMContentLoaded", function () {
    var incrementarBotones = document.querySelectorAll(".incrementar");
    var decrementarBotones = document.querySelectorAll(".decrementar");
    var contadorElementos = document.querySelectorAll(".contador");
    var subtotalElementos = document.querySelectorAll(".subtotal");

    var estadoComun = {
        valorContador: 1,
        valorSubtotal: 300000,
    };

    function actualizarTodo() {
        contadorElementos.forEach(function (elemento) {
            elemento.textContent = estadoComun.valorContador;
        });

        subtotalElementos.forEach(function (elemento) {
            var nuevoSubtotal = estadoComun.valorContador * estadoComun.valorSubtotal;
            elemento.textContent = "$" + nuevoSubtotal.toLocaleString();
        });

        // Almacenar en localStorage
        localStorage.setItem("valorContador", estadoComun.valorContador);
        localStorage.setItem("valorSubtotal", estadoComun.valorSubtotal);
    }

    function incrementarContador() {
        if (estadoComun.valorContador < 10) {
            estadoComun.valorContador++;
            actualizarTodo();
        }
    }

    function decrementarContador() {
        if (estadoComun.valorContador > 1) {
            estadoComun.valorContador--;
            actualizarTodo();
        }
    }

    incrementarBotones.forEach(function (boton) {
        boton.addEventListener("click", incrementarContador);
    });

    decrementarBotones.forEach(function (boton) {
        boton.addEventListener("click", decrementarContador);
    });

    // Restaurar valores desde localStorage al cargar la página
    if (localStorage.getItem("valorContador")) {
        estadoComun.valorContador = parseInt(localStorage.getItem("valorContador"));
    }

    if (localStorage.getItem("valorSubtotal")) {
        estadoComun.valorSubtotal = parseInt(localStorage.getItem("valorSubtotal"));
    }

    // Actualizar todo al cargar la página
    actualizarTodo();
});

document.addEventListener("DOMContentLoaded", function () {
    var subtotalResumenElemento = document.getElementById("subtotalResumen");
    var totalResumenElemento = document.getElementById("totalResumen");

    // Recuperar valores desde localStorage
    var valorContador = parseInt(localStorage.getItem("valorContador")) || 1;
    var valorSubtotal = parseInt(localStorage.getItem("valorSubtotal")) || 300000;

    // Actualizar elementos en la página de facturación
    subtotalResumenElemento.textContent = "$" + (valorContador * valorSubtotal).toLocaleString();
    totalResumenElemento.textContent = "$" + (valorContador * valorSubtotal + 7000).toLocaleString(); // Suponiendo que el envío siempre es $7,000
});

document.addEventListener('DOMContentLoaded', function () {
    var cuadrados = document.querySelectorAll('.cuadrado_color');
    var imagenJardinerito = document.getElementById('imagenJardinerito');

    cuadrados.forEach(function (cuadrado, index) {
        cuadrado.addEventListener('click', function () {
            // Cambiar la imagen al hacer clic en un cuadro
            switch (index) {
                case 0:
                    imagenJardinerito.src = './Imagenes/Perspectiva_Jardinerito_1.png';
                    break;
                case 1:
                    imagenJardinerito.src = './Imagenes/Perspectiva_Jardinerito_2.png';
                    break;
                case 2:
                    imagenJardinerito.src = './Imagenes/Perspectiva_Jardinerito_3.png';
                    break;
                case 3:
                    imagenJardinerito.src = './Imagenes/Perspectiva_Jardinerito_4.png';
                    break;
                default:
                    // Puedes agregar un caso predeterminado si es necesario
                    break;
            }

            // Alternar la clase cuadrado_seleccionado
            cuadrado.classList.toggle('cuadrado_seleccionado');

            // Remover la clase cuadrado_seleccionado de los demás cuadrados
            cuadrados.forEach(function (c, i) {
                if (i !== index) {
                    c.classList.remove('cuadrado_seleccionado');
                }
            });
        });
    });
}); 