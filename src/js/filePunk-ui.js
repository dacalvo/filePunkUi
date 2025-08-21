/* ==========================================================================
    Archivo: FilePunk.js / aplica a los componentes clasicos sencillos sin animaciones ni zona de carga
    Autor: Diego Alejandro Calvo(HB)
    Proyecto: Librería js para campos file
    Copyright © 2025 Diego Alejandro Calvo orozco. Todos los derechos reservados.
    Licencia: MIT
 ========================================================================= */
//aseguramos que el dom este completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const inputFile = document.getElementById('file3');
    const estadoCarga = document.getElementById('estadoCarga');

    inputFile.addEventListener('change', () => {
        const archivo = inputFile.files[0];

        // Reset de clases
        estadoCarga.classList.remove('cargando', 'exito', 'error');

        if (archivo) {
            const nombre = archivo.name;
            const tamaño = (archivo.size / 1024).toFixed(2); // KB
            const fecha = new Date().toISOString();

            // Estado: cargando
            estadoCarga.textContent = 'Procesando archivo...';
            estadoCarga.classList.add('cargando');

            // Simulación de procesamiento 500 milisegundos
            setTimeout(() => {
                estadoCarga.textContent = ''; // Limpiar
                estadoCarga.classList.add('exito');

                const icono = document.createElement('i');
                icono.className = 'fas fa-check-circle me-2'; // Ícono verde de éxito
                estadoCarga.appendChild(icono);
                estadoCarga.append(`${nombre} (${tamaño} KB)`);
                estadoCarga.classList.remove('cargando');
                estadoCarga.classList.add('exito');

            }, 500); // Simula delay de carga
        } else {
            estadoCarga.textContent = ''; // Limpiar
            estadoCarga.classList.add('error');
            const icono = document.createElement('i');
            icono.className = 'fa-solid fa-xmark'; // Ícono verde de éxito
            estadoCarga.appendChild(icono);
            estadoCarga.append(`Ningun archivo seleccionado`);
        }
    });
});
