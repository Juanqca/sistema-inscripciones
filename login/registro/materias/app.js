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
// Base de datos local de horarios por materia para la actualización
const detallesMaterias = {
    "Matemática I": "Lunes y Miércoles 08:00 - 10:00",
    "Programación I": "Martes y Jueves 09:00 - 11:00",
    "Física I": "Lunes y Viernes 10:00 - 12:00",
    "Base de Datos": "Miércoles y Viernes 14:00 - 16:00"
};

document.getElementById('btn-registrar').addEventListener('click', async () => {
    const casillas = document.querySelectorAll('.materia-check:checked');
    const materiasSeleccionadas = Array.from(casillas).map(cb => cb.value);

    if (materiasSeleccionadas.length === 0) {
        alert("❌ Error: Debes seleccionar al menos una materia antes de registrar.");
        return;
    }

    const datosEstudiante = {
        idEstudiante: "EST-2026",
        materias: materiasSeleccionadas
    };

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosEstudiante)
        });

        if (respuesta.ok) {
            // 1. GENERAR NÚMERO DE REGISTRO ÚNICO (Simulado por el servidor)
            const numeroRegistro = "REG-" + Math.floor(100000 + Math.random() * 900000);
            document.getElementById('num-registro').innerText = numeroRegistro;

            // 2. ACTUALIZACIÓN DEL HORARIO VISUAL
            const tablaHorario = document.getElementById('tabla-horario');
            tablaHorario.innerHTML = ""; // Limpiar horario previo

            materiasSeleccionadas.forEach(materia => {
                const itemHorario = document.createElement('p');
                itemHorario.style.margin = "5px 0";
                itemHorario.innerHTML = `📖 <strong>${materia}</strong>: ${detallesMaterias[materia]}`;
                tablaHorario.appendChild(itemHorario);
            });

            // 3. MOSTRAR MENSAJE DE ÉXITO Y OCULTAR BOTÓN
            document.getElementById('comprobante').style.display = 'block';
            document.getElementById('btn-registrar').style.display = 'none';
            
            // Deshabilitar las casillas para evitar modificaciones post-registro
            document.querySelectorAll('.materia-check').forEach(cb => cb.disabled = true);

        } else {
            alert("❌ El servidor respondió con un error.");
        }
    } catch (error) {
        alert("❌ Hubo un fallo de red al conectar con el servidor.");
    }
});
