document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Captura de datos y limpieza de espacios en blanco
    const nombre = document.getElementById('nombre').value.trim();
    const ci = document.getElementById('ci').value.trim();
    const carrera = document.getElementById('carrera').value;
    const correo = document.getElementById('correo').value.trim();
    
    const mensaje = document.getElementById('mensajeExito');

    // Inicializar estilos de la alerta (por si venía de un error previo)
    mensaje.style.backgroundColor = "#e8f8f5";
    mensaje.style.color = "#117a65";

    // 2. VALIDACIÓN: Campos obligatorios
    // Aunque HTML5 tiene 'required', JS asegura que no envíen solo espacios en blanco
    if (!nombre || !ci || !carrera || !correo) {
        mostrarError("Todos los campos son estrictamente obligatorios.");
        return;
    }

    // 3. VALIDACIÓN: CI válido (Solo números, entre 6 y 10 dígitos)
    const regexCI = /^[0-9]{6,10}$/;
    if (!regexCI.test(ci)) {
        mostrarError("El CI no es válido. Debe contener solo números (entre 6 y 10 dígitos).");
        return;
    }

    // 4. VALIDACIÓN: Email válido (Expresión regular estándar)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo)) {
        mostrarError("Por favor, introduce un correo electrónico válido (ejemplo@dominio.com).");
        return;
    }

    // Si pasa todas las validaciones: Éxito
    mensaje.textContent = `¡Registro exitoso! Estudiante ${nombre} guardado correctamente.`;
    mensaje.classList.remove('hidden');

    // Limpiar formulario
    document.getElementById('registroForm').reset();
});

// Función auxiliar para manejar los errores visualmente
function mostrarError(texto) {
    const mensaje = document.getElementById('mensajeExito');
    mensaje.textContent = texto;
    mensaje.style.backgroundColor = "#f8d7da";
    mensaje.style.color = "#721c24";
    mensaje.classList.remove('hidden');
}
