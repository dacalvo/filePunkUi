/* ==========================================================================
    Archivo: filepunkArrastrarSencillo / Bloquea la busqueda
    Autor: Diego Alejandro Calvo(HB)
    Proyecto: Librería js para campos file
    Copyright © 2025 Diego Alejandro Calvo orozco. Todos los derechos reservados.
    Licencia: MIT
 ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const dropZona = document.getElementById('dropZona');
    const input = document.getElementById('fileS3');
    const info = document.getElementById('infoZona');

    let fueDragDrop = false;

    // Evitar comportamiento por defecto
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evento => {
        dropZona.addEventListener(evento, e => e.preventDefault());
    });

    // Drag & Drop
    dropZona.addEventListener('drop', e => {
        const archivo = e.dataTransfer.files[0];
        if (!archivo) return;

        input.files = e.dataTransfer.files;
        fueDragDrop = true;

        info.textContent = `"${archivo.name}" cargado correctamente`;
    });

    // Interceptar selección manual
    input.addEventListener('change', e => {
        if (!fueDragDrop) {
            input.value = ''; // Limpia el input
            e.preventDefault();
            info.textContent = 'Solo se permite carga por arrastrar y soltar';
        }
        fueDragDrop = false;
    });
});
