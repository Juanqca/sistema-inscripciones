// FIX QA 1: Se corrigió la propiedad 'fontNombre' por 'nombre'
const materiasDisponibles = [
  { id: 1, nombre: "Matemática I", creditos: 5 },
  { id: 2, nombre: "Programación I", creditos: 4 },
  { id: 3, nombre: "Física I", creditos: 5 },
  { id: 4, nombre: "Base de Datos", creditos: 4 } 
];

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

    // FIX QA 3: Deshabilitar el botón inmediatamente al hacer clic para evitar peticiones duplicadas
    const btnRegistrar = document.getElementById('btn-registrar');
    btnRegistrar.disabled = true;
    btnRegistrar.innerText = "Procesando...";

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosEstudiante)
        });

        if (respuesta.ok) {
            const numeroRegistro = "REG-" + Math.floor(100000 + Math.random() * 900000);
            document.getElementById('num-registro').innerText = numeroRegistro;

            const tablaHorario = document.getElementById('tabla-horario');
            
            // FIX QA 2: Asegurar la limpieza absoluta antes de insertar el nuevo horario
            tablaHorario.innerHTML = ""; 

            materiasSeleccionadas.forEach(materia => {
                const itemHorario = document.createElement('p');
                itemHorario.style.margin = "5px 0";
                itemHorario.innerHTML = `📖 <strong>${materia}</strong>: ${detallesMaterias[materia]}`;
                tablaHorario.appendChild(itemHorario);
            });

            document.getElementById('comprobante').style.display = 'block';
            btnRegistrar.style.display = 'none'; // Ocultar si fue exitoso
            
            document.querySelectorAll('.materia-check').forEach(cb => cb.disabled = true);

        } else {
            throw new Error("Respuesta incorrecta del servidor");
        }
    } catch (error) {
        alert("❌ Hubo un fallo al conectar con el servidor. Inténtalo de nuevo.");
        // FIX QA 3 (Cont.): Si falla, reactivar el botón para permitir reintentar
        btnRegistrar.disabled = false;
        btnRegistrar.innerText = "Confirmar e Inscribir Materias";
    }
});
