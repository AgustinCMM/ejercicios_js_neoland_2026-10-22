# Práctica de funciones con JavaScript

## Objetivo
Entorno web local para practicar funciones con JavaScript mediante ejercicios independientes.

## Tecnologías
HTML5, CSS3 y JavaScript vanilla (ES6+). No requiere instalación de dependencias, frameworks, backend ni herramientas de compilación.

## Selección de ejercicios
Se incluyen exclusivamente las 20 consignas bajo «Bloque 2: Retos avanzados (20 Ejercicios sin tips)» en `funciones.docx`. El documento no asigna números individuales: los rótulos iniciales de cada consigna se usan como títulos y los números visibles del índice solo indican su posición en esa sección.

## Estructura
- `index.html`: índice de los ejercicios seleccionados.
- `assets/css/styles.css`: identidad visual compartida, navegación, tarjetas y paneles.
- `assets/js/main.js`: comportamientos generales, sin lógica de ejercicios.
- `ejercicio-<número>/`: página, hoja CSS y plantilla JS independientes por ejercicio.
- `funciones.docx`: documento fuente, conservado sin cambios.

## Uso
Abre `index.html` en un navegador moderno y elige un ejercicio. La navegación permite volver al inicio, abrir cualquier reto y avanzar al anterior o siguiente. El enlace activo identifica el ejercicio actual.

Escribe la solución en `ejercicio-<número>/js/script.js`. Las plantillas JS solo contienen comentarios breves y no incluyen implementaciones ni resultados de ejemplo.

Las áreas de resultados preparan un contenedor vacío cuando la consigna dirige la salida a pantalla. Para las consignas que piden explícitamente imprimir en consola se muestra «(ver en consola)». Abre las herramientas de desarrollador y selecciona Console/Consola. Las consignas sin destino explícito conservan un contenedor vacío.

## Añadir ejercicios
Crea una carpeta independiente siguiendo `ejercicio-41/` con `index.html` (o el siguiente número disponible), `css/styles.css` y `js/script.js`. Conserva número, título, consigna y orden fuente; añade el enlace al índice y a la navegación. Prepara resultados según el destino expresado en la consigna.

## Restricciones
Solo HTML, CSS y JavaScript vanilla. Sin bibliotecas externas, frameworks, dependencias, compilación, backend, resultados ficticios, tips o código que adelante la solución.

Si el navegador limita alguna función al abrir archivos locales (por ejemplo, módulos JavaScript), se puede usar cualquier servidor estático local ya disponible. Es opcional y no requiere instalación dentro del proyecto.


## Numeración, navegación y estados
Los 20 retos avanzados aparecen numerados del 21 al 40, después de los 20 ejercicios guiados del documento. En el índice, el botón «Empezar» abre el ejercicio 21. Dentro de cada reto, la barra superior enlaza al anterior y al siguiente; las tarjetas completas del índice enlazan a cada ejercicio.

El estado pendiente/resuelto se guarda automáticamente en `localStorage` del navegador. Puedes alternarlo desde la página del ejercicio; el índice muestra el estado al volver a abrirlo en ese navegador. En la parte inferior del índice, «Importar o exportar estados» permite descargar todos los estados como JSON o importar una copia JSON en otro navegador o equipo. Al importar, se reemplazan los estados actuales por los valores del archivo. El estado guardado localmente depende del navegador y del perfil; usa la exportación JSON para trasladar una copia.
