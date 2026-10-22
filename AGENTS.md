# AGENTS.md — Práctica de funciones con JavaScript

## 1. Objetivo

Crear un entorno web local para practicar funciones con JavaScript, organizado en ejercicios independientes.

Las consignas originales se encuentran en el documento `funciones.docx`, ubicado en la raíz del proyecto.

Solo deben incluirse los ejercicios pertenecientes a la categoría **«Retos avanzados sin tips»**.

El objetivo es preparar toda la estructura, la interfaz visual y los archivos necesarios para que el desarrollador pueda resolver los ejercicios sin tener que construir la base de cada página.

**Está prohibido resolver los ejercicios o incluir código que adelante su solución.**

## 2. Tecnologías permitidas

Utilizar exclusivamente:

- HTML5.
- CSS3.
- JavaScript vanilla (ES6+).

No utilizar frameworks, bibliotecas externas, preprocesadores CSS, TypeScript, gestores de paquetes, herramientas de compilación ni dependencias que requieran instalación.

El proyecto debe funcionar en un navegador moderno y no debe necesitar un backend.

## 3. Análisis obligatorio de las consignas

Antes de crear o modificar archivos:

1. Inspeccionar la estructura existente del proyecto.
2. Leer íntegramente el documento `funciones.docx`.
3. Identificar las secciones, categorías y ejercicios del documento.
4. Localizar exclusivamente la categoría «Retos avanzados sin tips».
5. Extraer todos los ejercicios que pertenezcan inequívocamente a esa categoría.
6. Registrar el número o identificador original, el título y la consigna completa de cada ejercicio.
7. Determinar, según las instrucciones explícitas de cada consigna, si los resultados deben mostrarse en pantalla, en la consola o en ambos lugares.
8. Conservar el orden y la numeración originales.

No incluir ejercicios de «Retos básicos», «Retos intermedios», «Retos avanzados con tips» ni de otras categorías.

No inferir que un ejercicio pertenece a la categoría seleccionada únicamente porque su dificultad aparente sea avanzada.

Si no se puede identificar inequívocamente la categoría o extraer las consignas, informar del problema y solicitar aclaraciones antes de generar las páginas de los ejercicios afectados.

No inventar, resumir, corregir ni alterar las consignas originales.

Si un ejercicio no tiene un número explícito, no inventar uno presentado como original. Se puede utilizar un identificador técnico estable para la carpeta y conservar el título y la ubicación originales.

No modificar el documento `funciones.docx`.

## 4. Estructura de carpetas

Crear una estructura independiente por ejercicio, con nombres descriptivos y numeración original cuando esté disponible.

Estructura de referencia:

    /
    ├── AGENTS.md
    ├── README.md
    ├── funciones.docx
    ├── index.html
    ├── assets/
    │   ├── css/
    │   │   └── styles.css
    │   └── js/
    │       └── main.js
    └── ejercicios/
        ├── ejercicio-XX/
        │   ├── index.html
        │   ├── css/
        │   │   └── styles.css
        │   └── js/
        │       └── script.js
        ├── ejercicio-YY/
        │   ├── index.html
        │   ├── css/
        │   │   └── styles.css
        │   └── js/
        │       └── script.js
        └── ...

Los identificadores XX e YY son ejemplos. Utilizar los números originales de las consignas siempre que existan.

No completar huecos en la numeración ni renumerar consecutivamente los ejercicios seleccionados.

Si el documento contiene ejercicios con identificadores repetidos o ambiguos, resolver la organización mediante identificadores técnicos estables, sin alterar el número original que se muestra al usuario.

Cada ejercicio debe tener sus propios archivos HTML, CSS y JavaScript.

La carpeta `assets/` contendrá los recursos generales compartidos por las páginas.

No duplicar archivos generales dentro de cada ejercicio.

## 5. Página principal

Crear `index.html` como punto de entrada al sitio.

Debe incluir:

- Nombre del proyecto.
- Descripción breve del propósito.
- Indicación de que se trata de ejercicios de funciones con JavaScript.
- Número o identificador original de cada ejercicio.
- Título original de cada ejercicio.
- Enlaces funcionales a las páginas correspondientes.
- Un indicador visual de que los ejercicios están pendientes de resolución.
- Una presentación clara y organizada de todos los ejercicios seleccionados.

La página principal debe mostrar únicamente los ejercicios de «Retos avanzados sin tips».

Los enlaces deben conducir a archivos existentes y respetar la estructura de carpetas real.

No crear ejercicios de ejemplo ni tarjetas sin contenido real.

## 6. Navegación compartida

Todas las páginas deben disponer de una navegación visualmente coherente.

Debe permitir:

- Volver al inicio.
- Acceder a los ejercicios seleccionados.
- Identificar el ejercicio actual.
- Reconocer el enlace activo.
- Navegar entre ejercicios sin tener que volver obligatoriamente al inicio.

La navegación debe ser responsive y accesible mediante teclado.

Si no caben todos los ejercicios en una barra horizontal, utilizar una alternativa adecuada para pantallas pequeñas.

Mantener los enlaces relativos correctos desde la raíz y desde cada subcarpeta.

La navegación debe incluir exclusivamente los ejercicios seleccionados del documento.

## 7. Página individual de cada ejercicio

Cada ejercicio debe disponer de una página HTML independiente con:

1. Navegación compartida.
2. Número o identificador original, cuando exista.
3. Título original.
4. Consigna completa y fiel al documento.
5. Área de trabajo.
6. Área de resultados.
7. Indicaciones de uso cuando sean necesarias.

La consigna debe estar visible en la página renderizada, no solamente en comentarios HTML.

Conservar las listas, los párrafos, los ejemplos y los saltos de línea relevantes.

No incluir tips, pistas, soluciones, pseudocódigo orientado a resolver el ejercicio ni explicaciones adicionales que revelen su implementación.

No añadir información que no figure en la consigna original, salvo las indicaciones generales de navegación y uso de la página.

## 8. Área de trabajo

Cada ejercicio debe incluir un área visual que identifique dónde se encuentra el espacio de trabajo.

No es necesario implementar un editor de código dentro del navegador.

La resolución se realizará directamente en el archivo JavaScript correspondiente.

El HTML puede incluir una breve indicación, como «Implementa tu solución en `js/script.js`», siempre que no revele la solución del ejercicio.

No incluir formularios, controles, botones ni interfaces de entrada específicos de la solución, salvo que sean indispensables para el entorno general y no anticipen cómo debe resolverse la consigna.

## 9. Área de resultados

Todos los ejercicios deben incluir una sección de resultados en el HTML, aunque el ejercicio deba resolverse utilizando exclusivamente la consola.

Cuando los resultados deban mostrarse en pantalla, preparar un contenedor vacío con un identificador descriptivo.

Ejemplo:

    <section class="result-section">
        <h2>Resultados</h2>
        <div id="resultado" aria-live="polite"></div>
    </section>

Cuando los resultados deban consultarse exclusivamente en la consola, mostrar de forma visible:

    (ver en consola)

Si la consigna exige tanto resultados en pantalla como en consola, preparar el contenedor visual y añadir una indicación de que también deben consultarse en la consola.

Si el destino de los resultados no está especificado, no inventar requisitos. Utilizar un contenedor vacío y documentar la ambigüedad para su revisión.

No implementar resultados ficticios ni cálculos de ejemplo.

No resolver ninguna parte de la consigna para demostrar el funcionamiento del contenedor.

## 10. JavaScript de cada ejercicio

Cada ejercicio debe tener su propio archivo `js/script.js`.

La etiqueta `<script>` debe estar al final del `<body>`, inmediatamente antes de su cierre, y utilizar una ruta relativa correcta.

Ejemplo:

    <script src="./js/script.js"></script>
    </body>

El archivo JavaScript debe ser una plantilla vacía y clara.

Puede contener la consigna comentada al inicio del archivo:

    // Consigna comentada.

No añadir funciones que resuelvan total o parcialmente el ejercicio.

No incluir algoritmos de ejemplo, pruebas con soluciones conocidas, resultados ficticios ni código que adelante el enfoque de resolución.

No ejecutar cálculos ni producir salidas que puedan confundirse con la solución.

Si la consigna requiere resultados en consola, dejar únicamente un comentario que indique dónde incorporar esa salida.

Los archivos JavaScript deben ser independientes entre sí.

El archivo `assets/js/main.js` debe ocuparse exclusivamente de los comportamientos generales de la interfaz y la navegación.

No debe contener lógica de los ejercicios.

## 11. Estilos visuales

Crear un diseño compartido, simple, moderno, bonito y legible, utilizando exclusivamente CSS3.

Centralizar en `assets/css/styles.css` las variables y reglas comunes:

- Paleta de colores.
- Tipografía.
- Espaciados.
- Bordes y radios.
- Sombras.
- Ancho máximo del contenido.
- Navegación.
- Tarjetas.
- Estados interactivos.
- Contenedores de consignas y resultados.

Utilizar una estética sobria, con un color de acento y una jerarquía visual clara.

Todas las páginas deben compartir la misma identidad visual.

Las hojas CSS individuales deben contener solamente estilos adicionales realmente necesarios y reutilizar las variables generales.

Evitar duplicaciones innecesarias, animaciones excesivas y dependencias externas.

El diseño debe adaptarse a escritorio, tabletas y móviles.

## 12. Accesibilidad y calidad

Utilizar HTML semántico y añadir:

- `lang="es"`.
- Metadatos básicos.
- Un único `h1` principal por página.
- Encabezados jerárquicos.
- Navegación identificable.
- Enlaces descriptivos.
- Contraste suficiente.
- Estados `:focus-visible` claros.
- Accesibilidad mediante teclado.
- Atributos ARIA cuando estén justificados.

Evitar identificadores duplicados en una misma página, enlaces rotos, rutas incorrectas y errores de JavaScript.

No utilizar elementos interactivos que no tengan una función real.

## 13. README.md

Crear un `README.md` en español que documente:

- Objetivo del proyecto.
- Tecnologías utilizadas.
- Criterio de selección de los ejercicios.
- Estructura de carpetas.
- Funcionamiento de la navegación.
- Cómo abrir el proyecto.
- Cómo acceder a un ejercicio.
- Dónde escribir la solución.
- Cómo consultar la consola del navegador.
- Cómo se utiliza el área de resultados.
- Cómo añadir nuevos ejercicios respetando la estructura.
- Restricciones técnicas.

Indicar que el proyecto puede abrirse mediante `index.html` en un navegador moderno y que no requiere instalar dependencias.

Si una funcionalidad concreta estuviera limitada al abrir archivos locales, documentar una alternativa mediante un servidor estático local, sin introducir herramientas obligatorias ni dependencias.

## 14. Reglas de protección

- No modificar `funciones.docx`.
- No resolver ningún ejercicio.
- No incluir ejercicios fuera de «Retos avanzados sin tips».
- No alterar las consignas.
- No renumerar los ejercicios.
- No inventar títulos, números o requisitos.
- No añadir tips ni pistas.
- No introducir frameworks ni dependencias externas.
- No crear backend ni base de datos.
- No generar resultados ficticios.
- No añadir funcionalidades ajenas al objetivo.
- No colocar scripts en el `<head>`.
- No eliminar archivos existentes que contengan información útil.

Antes de sobrescribir cualquier archivo, inspeccionar su contenido y conservar lo que sea relevante.

## 15. Criterios de aceptación

El proyecto estará terminado cuando:

1. Se haya leído `funciones.docx`.
2. Se hayan identificado todos los ejercicios de «Retos avanzados sin tips».
3. No se haya incluido ninguna otra categoría.
4. Se conserve la numeración y el orden originales.
5. Exista una página principal funcional.
6. Cada ejercicio tenga su propia carpeta y sus archivos HTML, CSS y JS.
7. Cada HTML muestre la consigna original completa.
8. Todas las páginas incluyan un área de resultados.
9. Las páginas de ejercicios orientados a consola muestren «(ver en consola)».
10. Los scripts estén al final del `<body>`.
11. La navegación funcione desde todas las páginas.
12. El diseño sea coherente, accesible y responsive.
13. El proyecto funcione sin frameworks ni dependencias externas.
14. Exista un README.md completo.
15. No se haya resuelto ningún ejercicio.
16. Se hayan revisado los enlaces, las rutas y los errores evidentes.

Al finalizar, presentar un resumen de los archivos creados, los ejercicios incluidos, las comprobaciones realizadas y cualquier ambigüedad que requiera revisión.

## Anexo: preferencias específicas del proyecto
Estas instrucciones concretas del usuario prevalecen sobre los criterios anteriores cuando difieran:

- La categoría seleccionada contiene 20 retos y va después de los 20 ejercicios guiados del documento. Mostrar la numeración 21–40, en el índice y junto al título de cada ejercicio, sin modificar las consignas ni los nombres técnicos de carpetas.
- La navegación debe ser un menú desplegable con enlaces verticales, sin barra de desplazamiento horizontal.
- Cada tarjeta completa debe ser un enlace al ejercicio y mostrar un estado visual pendiente/resuelto. Evitar enlaces anidados dentro de la tarjeta.
- Los textos informativos principales deben estar contenidos en paneles o tarjetas con fondo propio para facilitar la lectura.
- Permitir alternar el estado de cada ejercicio entre pendiente y resuelto. Guardar el estado compartido en `estado-ejercicios.json`, nunca en localStorage ni otro almacenamiento del navegador. La página puede leer/escribir el archivo con una API de acceso a archivos del navegador, tras selección explícita del archivo y autorización del usuario. Informar de la compatibilidad requerida; no añadir backend ni dependencias.
- La página de cada ejercicio debe mostrar el mismo estado cargado del archivo y permitir modificarlo. La página principal debe reflejarlo en las tarjetas.


## Anexo: preferencia posterior sobre estados
Este anexo reemplaza cualquier indicación anterior de guardar estados en `estado-ejercicios.json` o evitar `localStorage`:

- Guardar automáticamente los estados de ejercicios en `localStorage`.
- Permitir alternar pendiente/resuelto en cada página de ejercicio y reflejar el estado en la tarjeta correspondiente del índice.
- El índice ofrece importación y exportación de un JSON con todos los estados en una opción discreta al final de la página. No mostrar controles de archivo en las páginas individuales.
- La importación debe validar el JSON antes de reemplazar los estados existentes.


## Anexo: estructura visual compacta de cada reto
- Agrupar el título, el estado y su control pequeño, y la consigna dentro del mismo contenedor.
- En cada página de ejercicio, dejar como contenido principal solo ese contenedor y el área de resultados. No crear un área de trabajo en el HTML.
- Usar una tipografía de sistema neutral y sencilla.
- Los controles de navegación entre ejercicios deben mostrar únicamente «Anterior» y «Siguiente» (se permiten flechas decorativas).


## Anexo: carpetas numeradas
Nombrar las carpetas de ejercicios `ejercicios/ejercicio-21/`, `ejercicios/ejercicio-22/` y así sucesivamente para que queden en orden. El título descriptivo permanece dentro de la página y en el índice; no es necesario incluirlo en el nombre de carpeta. Actualizar todos los enlaces al renombrar.
