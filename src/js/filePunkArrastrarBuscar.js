/* ==========================================================================
    Archivo: filepunkArrastrarBuscar.js
    Autor: Diego Alejandro Calvo(HB)
    Proyecto: Librería js
    Copyright © 2025 Diego Alejandro Calvo orozco. Todos los derechos reservados.
    Licencia: MIT
 ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const dropZona = document.getElementById('dropZonaS4');
    const input = document.getElementById('fileS4');
    const info = document.getElementById('infoZonaS4');

    // Evitar comportamiento por defecto en drag
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evento => {
        dropZona.addEventListener(evento, e => e.preventDefault());
    });

    // Drag & Drop
    dropZona.addEventListener('drop', e => {
        const archivo = e.dataTransfer.files[0];
        if (!archivo) return;

        input.files = e.dataTransfer.files;
        info.textContent = `"${archivo.name}" cargado correctamente`;
    });

    // Selección manual
    input.addEventListener('change', e => {
        const archivo = input.files[0];
        if (!archivo) return;
        info.textContent = `"${archivo.name}" cargado correctamente `;
    });
});
