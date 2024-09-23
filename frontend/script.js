// Función para actualizar el resumen del evento
function updateEventSummary() {
    const eventName = document.getElementById("event-name").value;
    const repetition = document.getElementById("repetition").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const time = document.getElementById("time").value;

    const eventSummary = `
        Nombre del evento: ${eventName || 'No especificado'}<br>
        Repetición: ${repetition}<br>
        Fecha de inicio: ${startDate || 'No especificado'}<br>
        Fecha de fin: ${endDate || 'No especificado'}<br>
        Horario: ${time || 'No especificado'}
    `;
    document.getElementById("event-summary-text").innerHTML = eventSummary;
}

// Función para actualizar el resumen de sesiones de estudio
function updateStudySummary() {
    const language = document.getElementById("language").value;
    const level = document.getElementById("level").value;
    const days = Array.from(document.getElementById("study-days").selectedOptions)
                     .map(option => option.value)
                     .join(", ");
    const studyTime = document.getElementById("study-time").value;

    const studySummary = `
        Idioma: ${language}<br>
        Nivel: ${level}<br>
        Días de estudio: ${days || 'No especificado'}<br>
        Horario: ${studyTime || 'No especificado'}
    `;
    document.getElementById("study-summary-text").innerHTML = studySummary;
}
