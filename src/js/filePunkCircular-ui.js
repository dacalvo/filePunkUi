/* ==========================================================================
    Archivo: filepunkCircular-ui.js / aplica a los componentes sencillos circulares
    Autor: Diego Alejandro Calvo(HB)
    Proyecto: Librería js para campos file
    Copyright © 2025 Diego Alejandro Calvo orozco. Todos los derechos reservados.
    Licencia: MIT
 ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('fileC3');
    const label = document.querySelector('label[for="fileC3"]');
    const icono = label.querySelector('i');
    const contenedor = document.querySelector('.contenedorCargarC3');

    input.addEventListener('change', () => {
        const archivo = input.files[0];

        // Reinicio visual
        contenedor.textContent = '';
        icono.className = 'fa-solid fa-spinner fa-spin'; // Ícono de carga animado

        if (!archivo) {
            contenedor.textContent = 'Carga cancelada';
            icono.className = 'fa-solid fa-upload'; // Restaurar ícono
            return;
        }

        // Simulación de carga por 1 segundo
        contenedor.textContent = `Cargando ${archivo.name}...`;

        setTimeout(() => {
            contenedor.textContent = ` ${archivo.name} cargado correctamente`;
            icono.className = 'fa-solid fa-check-circle'; // Éxito
        }, 1000); // 1 segundo
    });
});

