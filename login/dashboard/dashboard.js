document.getElementById('logoutBtn').addEventListener('click', function() {
    alert("Cerrando sesión de estudiante...");
});

// Ejemplo: Interactividad en los botones de acceso
document.querySelectorAll('.btn-acceso').forEach((boton, index) => {
    boton.addEventListener('click', () => {
        alert(`Redireccionando al acceso directo número ${index + 1}...`);
    });
});
