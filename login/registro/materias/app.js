document.getElementById('btn-registrar').addEventListener('click', async () => {
    // 1. CAPTURAR LAS MATERIAS SELECCIONADAS
    const casillas = document.querySelectorAll('.materia-check:checked');
    const materiasSeleccionadas = Array.from(casillas).map(cb => cb.value);

    // 2. VALIDACIÓN: Comprobar que haya elegido al menos una materia
    if (materiasSeleccionadas.length === 0) {
        alert("❌ Error: Debes seleccionar al menos una materia antes de registrar.");
        return; // Detiene el envío
    }

    // Preparar el paquete de datos para enviar
    const datosEstudiante = {
        idEstudiante: "EST-2026",
        materias: materiasSeleccionadas,
        enviadoEl: new Date().toISOString()
    };

    console.log("Datos listos para enviar:", datosEstudiante);

    // 3. ENVÍO AL SERVIDOR (Petición HTTP simulada con una API de prueba)
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosEstudiante)
        });

        if (respuesta.ok) {
            alert("✅ ¡Registro exitoso! Las materias seleccionadas se enviaron correctamente al servidor.");
        } else {
            alert("❌ El servidor respondió con un error al procesar el registro.");
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("❌ Hubo un fallo de red. No se pudo conectar con el servidor.");
    }
});
