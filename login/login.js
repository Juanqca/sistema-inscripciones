document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    const usuario = document.getElementById('username').value.trim();
    const contrasena = document.getElementById('password').value;
    const mensaje = document.getElementById('message');

    // 1. Validación de Usuario (Ejemplo: mínimo 4 caracteres)
    if (usuario.length < 4) {
        mensaje.textContent = "El usuario debe tener al menos 4 caracteres.";
        mensaje.className = "message error";
        return;
    }

    // 2. Validación de Contraseña (Ejemplo: mínimo 6 caracteres)
    if (contrasena.length < 6) {
        mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        mensaje.className = "message error";
        return;
    }

    // 3. Simulación de Inicio de sesión exitoso
    // (Aquí validarías contra una base de datos, usamos credenciales fijas de prueba)
    if (usuario === "juan" && contrasena === "123456") {
        mensaje.textContent = "¡Inicio de sesión exitoso! Bienvenido.";
        mensaje.className = "message success";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.className = "message error";
    }
});
