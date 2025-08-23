/* ==========================================================================
    Archivo: filepunkArrastrarDetectarZona
    Autor: Diego Alejandro Calvo(HB)
    Proyecto: Librería js para campos file
    Copyright © 2025 Diego Alejandro Calvo orozco. Todos los derechos reservados.
    Licencia: MIT
 ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const dropZona = document.getElementById('dropZonaS5');
    const input = document.getElementById('fileS5');
    const info = document.getElementById('infoZonaS5');

    // Evitar comportamiento por defecto
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evento => {
        dropZona.addEventListener(evento, e => e.preventDefault());
    });

    // Estilo visual al arrastrar
    dropZona.addEventListener('dragenter', () => {
        dropZona.classList.add('activo');
        info.textContent = 'Suelta el archivo aquí';
    });

    dropZona.addEventListener('dragleave', () => {
        dropZona.classList.remove('activo');
        info.textContent = 'Arrastre el archivo a la zona';
    });

    // Al soltar el archivo
    dropZona.addEventListener('drop', e => {
        dropZona.classList.remove('activo');
        const archivo = e.dataTransfer.files[0];
        if (!archivo) return;

        input.files = e.dataTransfer.files;
        info.textContent = `"${archivo.name}" cargado correctamente (drag & drop)`;
        console.log(`[fileDrop] Drag & drop: ${archivo.name}`);
    });

    // Selección manual desde el input
    input.addEventListener('change', () => {
        const archivo = input.files[0];
        if (!archivo) return;

        info.textContent = `"${archivo.name}" cargado correctamente (selección manual)`;
        console.log(`[fileDrop] Selección manual: ${archivo.name}`);
    });
});

