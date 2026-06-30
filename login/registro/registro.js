document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura de datos del formulario
    const nombre = document.getElementById('nombre').value;
    const ci = document.getElementById('ci').value;
    const carrera = document.getElementById('carrera').value;
    const correo = document.getElementById('correo').value;

    // Mostrar mensaje de éxito simulado
    const mensaje = document.getElementById('mensajeExito');
    mensaje.textContent = `¡Estudiante ${nombre} (CI: ${ci}) registrado con éxito en ${carrera}!`;
    mensaje.classList.remove('hidden');

    // Aquí puedes procesar los datos o enviarlos a una API
    console.log({ nombre, ci, carrera, correo });

    // Limpiar formulario
    document.getElementById('registroForm').reset();
});
