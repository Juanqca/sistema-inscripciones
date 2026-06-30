// Banco de datos de materias
const materias = [
    { id: 1, nombre: "Cálculo I", creditos: 5, horario: "Lun - Mie 08:00 - 10:00" },
    { id: 2, nombre: "Estructuras de Datos", creditos: 6, horario: "Mar - Jue 10:00 - 12:00" },
    { id: 3, nombre: "Bases de Datos I", creditos: 5, horario: "Lun - Mie 14:00 - 16:00" },
    { id: 4, nombre: "Programación Web", creditos: 4, horario: "Vie 08:00 - 12:00" },
    { id: 5, nombre: "Inteligencia Artificial", creditos: 6, horario: "Mar - Jue 16:00 - 18:00" }
];

let creditosTotales = 0;
const materiasSeleccionadas = new Set();

const tbody = document.getElementById('listaMaterias');
const totalCreditosTxt = document.getElementById('totalCreditos');
const btnConfirmar = document.getElementById('btnConfirmar');

// Renderizar la tabla dinámicamente
materias.forEach(materia => {
    const fila = document.createElement('tr');
    fila.id = `materia-${materia.id}`;
    fila.innerHTML = `
        <td><strong>${materia.nombre}</strong></td>
        <td>${materia.creditos}</td>
        <td><code>${materia.horario}</code></td>
        <td><button class="btn-seleccionar" onclick="toggleMateria(${materia.id}, ${materia.creditos})">Agregar</button></td>
    `;
    tbody.appendChild(fila);
});

// Lógica para agregar o quitar materias
window.toggleMateria = function(id, creditos) {
    const fila = document.getElementById(`materia-${id}`);
    const boton = fila.querySelector('.btn-seleccionar');

    if (materiasSeleccionadas.has(id)) {
        // Quitar materia
        materiasSeleccionadas.delete(id);
        creditosTotales -= creditos;
        fila.classList.remove('fila-seleccionada');
        boton.textContent = "Agregar";
        boton.classList.remove('quitar');
    } else {
        // Agregar materia
        materiasSeleccionadas.add(id);
        creditosTotales += creditos;
        fila.classList.add('fila-seleccionada');
        boton.textContent = "Quitar";
        boton.classList.add('quitar');
    }

    // Actualizar vista del resumen
    totalCreditosTxt.textContent = creditosTotales;
    btnConfirmar.disabled = materiasSeleccionadas.size === 0;
};

btnConfirmar.addEventListener('click', () => {
    alert(`¡Inscripción confirmada con éxito! Total créditos registrados: ${creditosTotales}`);
});
