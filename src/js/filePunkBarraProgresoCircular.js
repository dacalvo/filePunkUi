/* ==========================================================================
    Archivo: filepunkBarraProgresoCircular.js / aplica en los componentes circulares
    Autor: Diego Alejandro Calvo(HB)
    Proyecto: Librería js para campos file
    Copyright © 2025 Diego Alejandro Calvo orozco. Todos los derechos reservados.
    Licencia: MIT
 ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('fileC4');
    const label = document.querySelector('label[for="fileC4"]');
    const icono = label.querySelector('i');
    const barra = document.getElementById('barraC4')
    const mensaje = document.querySelector('.contenedorCargarProgresoC3');

    input.addEventListener('change', () => {
        const archivo = input.files[0];

        // Reset visual
        barra.style.width = '0%';
        icono.className = 'fa-solid fa-spinner fa-spin';
        mensaje.textContent = archivo
            ? `Cargando ${archivo.name}...`
            : 'Carga cancelada';

        if (!archivo) {
            icono.className = 'fa-solid fa-upload';
            return;
        }

        // Simulación de carga
        let progreso = 0;
        const intervalo = setInterval(() => {
            progreso += 10;
            barra.style.width = `${progreso}%`;

            if (progreso >= 100) {
                clearInterval(intervalo);
                icono.className = 'fa-solid fa-check-circle';
                mensaje.textContent = `${archivo.name} cargado correctamente`;

                // Restaurar ícono después de 2 segundos
                setTimeout(() => {
                    icono.className = 'fa-solid fa-upload';
                    barra.style.width = '0%';
                    mensaje.textContent = 'Seleccione un archivo';
                }, 2000);
            }
        }, 100); // 100ms x 10 = 1 segundo total
    });
});
