# Schedule Generator 📅

Una herramienta web profesional diseñada por Prof. Victor M. Sáa adaptado a **IFL Idiomas** que automatiza la creación de cronogramas de contenido (*Content Charts*) pedagógicos. Permite generar PDFs listos para imprimir o enviar, con cálculo automático de fechas, gestión de feriados y soporte multi-idioma.

## 🚀 Características Principales

* **Generación de PDF de Alta Calidad:** Utiliza `html2pdf.js` para capturar el diseño exacto de la tabla en formato carta horizontal (*landscape*).
* **Motor de Fechas Inteligente:** Calcula automáticamente los días de clase (L-J, L-V, Sábados, etc.) saltando los domingos y los **feriados bancarios/nacionales de Venezuela 2026**.
* **Soporte Multi-Programa:** Configuración específica para programas **Intensive, Teens, Kids, C1** y clases de **Italiano, Francés y Portugués**.
* **Gestión de Sesión:** Sistema de numeración automática para archivos duplicados (ej: `... (1).pdf`) para facilitar el flujo de trabajo del coordinador.
* **Interfaz Dinámica:** Cambio automático de etiquetas de interfaz según el idioma seleccionado.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 (Diseño responsivo y @media print).
* **Lógica:** JavaScript (Vanilla JS) para el motor de fechas y manipulación del DOM.
* **Librerías:** [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) para la conversión de HTML a PDF.
* **Hosting:** Desplegado en **Netlify** con soporte para scripts dinámicos.

## 📂 Estructura del Proyecto

* `index.html`: Estructura principal y formularios de entrada.
* `style.css`: Estilos de la aplicación y diseño específico de la hoja de cronograma (Padding optimizado: 60px superior, 10px inferior).
* `script.js`: Toda la lógica de negocio, cálculos de tiempo, traductores y motor de descarga.
* `syllabus.js`: (Opcional) Archivo de datos con los contenidos por nivel cargados en `window.syllabusData`.

## 📝 Cómo Usar

1.  Selecciona el **Programa** (Intensive, Teens, etc.) en las pestañas superiores.
2.  Ingresa el nombre del **Teacher** y selecciona el **Nivel**.
3.  Define la **Hora de Inicio** (el sistema calculará el fin según el programa).
4.  Elige la **Fecha de Inicio** y presiona "Generate Schedule".
5.  Edita cualquier celda directamente si es necesario (el contenido es *contenteditable*).
6.  Haz clic en **Download PDF** para guardar el archivo con el nombre estandarizado.

---
**Desarrollado para el IFL Idiomas.** *Coordinación de Desarrollo Profesional y Dirección Pedagógica.*