/* ==========================================================================
    Archivo: filepunkBarraProgreso.js / se mosnta en los componentes Clásico
    Autor: Diego Alejandro Calvo(HB)
    Proyecto: Librería js para campos file
    Copyright © 2025 Diego Alejandro Calvo orozco. Todos los derechos reservados.
    Licencia: MIT
 ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const inputArchivo = document.getElementById('file4');
    const barra = document.querySelector('#file4 ~ .barra-progreso-contenedor .barra-progreso-lleno');
    const estado = document.getElementById('estadoCargaBarra');

    let lectorActivo = null;

    inputArchivo.addEventListener('change', (evento) => {
        const archivo = evento.target.files[0];

        //  Reinicio visual por carga de archivo
        barra.style.width = '0%';
        barra.classList.remove('completo');
        estado.textContent = '';
        estado.className = 'estado-carga';

        //Si no hay archivo, se considera cancelación
        if (!archivo) {
            estado.textContent = 'Carga cancelada por el usuario';
            estado.classList.add('error');
            if (lectorActivo) lectorActivo.abort();
            return;
        }

        //Abortamos carga anterior si existe
        if (lectorActivo) lectorActivo.abort();

        const lector = new FileReader();
        lectorActivo = lector;

        estado.textContent = `Iniciando carga de ${archivo.name}...`;
        estado.className = 'estado-carga cargando';

        lector.onprogress = (evento) => {
            if (evento.lengthComputable) {
                const porcentaje = Math.round((evento.loaded / evento.total) * 100);
                barra.style.width = `${porcentaje}%`;
                estado.textContent = `Cargando ${archivo.name}: ${porcentaje}%`;
                estado.className = 'estado-carga cargando';
            }
        };

        lector.onload = () => {
            barra.classList.add('completo');
            estado.textContent = `${archivo.name} cargado correctamente`;
            estado.className = 'estado-carga exito';
        };

        lector.onerror = () => {
            if (lector.error?.name === 'AbortError') {
                estado.textContent = `Carga abortada de ${archivo.name}`;
                estado.className = 'estado-carga error';
            } else {
                barra.style.backgroundColor = '#ff4d4d';
                estado.textContent = `Error al cargar ${archivo.name}`;
                estado.className = 'estado-carga error';
            }
        };

        lector.readAsArrayBuffer(archivo);
    });
});
