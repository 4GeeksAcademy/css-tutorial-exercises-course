<!-- hide -->
<div align="center">

# Aprende CSS con Ejercicios Interactivos

[![Tutorial certificado por 4Geeks](https://img.shields.io/badge/certified-4Geeks-2563eb)](https://4geeks.com/es/interactive-exercise/css-tutorial-exercises-course)
[![Autocorregido con LearnPack](https://img.shields.io/badge/autograded-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![Abrir en Codespaces](https://img.shields.io/badge/open%20in-Codespaces-fb5a1f?logo=github)](https://codespaces.new/4GeeksAcademy/css-tutorial-exercises-course)

</div>
<!-- endhide -->

Este tutorial reúne 21 ejercicios de CSS con corrección automática más una página de bienvenida, con una duración estimada de 8 horas. Practicarás las tres formas de aplicar CSS (atributo en línea, etiqueta `<style>` y hoja externa), selectores de etiqueta, clase e id, especificidad e `!important`, fondos, viñetas de listas, `border-radius` con `object-fit`, Google Fonts, iconos de Font Awesome, `em` frente a `rem` y los estados `:hover` y `:active`. Cada ejercicio se valida con un test de Jest.

<!-- hide -->
## 📋 Sobre este tutorial

- **Dificultad**: fácil — pensado para principiantes absolutos
- **Duración**: 8 horas (según `learn.json`)
- **Ejercicios**: 22 carpetas dentro de `exercises/` — 1 de bienvenida y 21 con corrección automática
- **Tecnologías**: CSS, front-end, desarrollo web
- **Corrección**: automática, 21 ficheros de test que se ejecutan con Jest 29.7.0 y `jest-environment-jsdom`
- **Vídeos**: 15 de los 21 ejercicios corregidos enlazan un tutorial en YouTube, además del vídeo de introducción
- **Licencia**: [LICENSE.md](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/HEAD/LICENSE.md) — todos los derechos reservados
- **Idiomas**: [English](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

- **Las tres formas de aplicar estilos**: el atributo `style` en línea, una etiqueta `<style>` dentro del documento y una hoja externa `styles.css` enlazada con `<link>`, y por qué la tercera es la opción profesional.
- **Selectores**: por etiqueta, por `.clase`, por `#id`, descendentes como `ul li`, el hermano adyacente `li + #thirditem` y pseudoclases como `:hover`, `:active` y `tr:nth-child()`.
- **Especificidad y cascada**: por qué una regla escrita antes puede seguir ganando, cómo vencerla con un selector más específico y cuándo `!important` es la salida legítima.
- **Colores**: colores con nombre y `rgba()` para capas semitransparentes sobre una imagen de fondo.
- **Fondos**: `background-size` con `contain` y `cover`, `background-repeat` en los ejes x e y, y el atajo `background` donde la posición y el tamaño se separan con una barra inclinada.
- **Propiedades abreviadas**: reducir cuatro declaraciones de `padding` a una sola, y `border-color` + `border-style` + `border-width` a una única línea `border`.
- **Estilos de lista**: `list-style-type` con `lower-alpha`, `square`, `armenian` y `none`.
- **Trucos con imágenes**: avatares circulares con `border-radius`, `object-fit` y `object-position` aunque la imagen original no sea cuadrada.
- **Tipografía**: importar una fuente de Google con `<link>` y aplicarla con `font-family`, además de los iconos tipográficos de Font Awesome como alternativa a las imágenes.
- **Unidades relativas**: `em` (relativa al `font-size` del padre) frente a `rem` (relativa a la raíz de la página).
- **Componentes interactivos**: convertir un enlace corriente en un botón con `padding`, `border-radius`, `text-decoration: none` y un cambio de color en `:hover`.

## 👀 ¿Qué vas a construir?

Los 21 ejercicios corregidos viven en `exercises/` y se resuelven en orden. Se agrupan en cuatro bloques:

- **Llevar el CSS a la página (6 ejercicios)**: `01-inline-styles`, `02-style-tag`, `02.1-add-a-style-tag`, `02.2-rbga-colors`, `02.3-your-second-style`, `03-separate-stylesheet`. Pintas una tabla de verde con un atributo en línea, trasladas la misma idea a un bloque `<style>`, cambias un enlace rojo a amarillo y terminas moviéndolo todo a un `styles.css` aparte.
- **Fondos, listas y atajos (3 ejercicios)**: `03.1-background`, `04-list-styling`, `05.1-combined-rules`. Cambias un fondo a `contain` y luego a `repeat`, conviertes cuatro listas de bebidas en letras minúsculas, viñetas cuadradas, numeración armenia y ninguna viñeta, y comprimes cuatro reglas de `padding` y un montón de reglas de fondo en dos líneas abreviadas.
- **Selectores y especificidad (5 ejercicios)**: `05-class-selector`, `05.2-apply-several-classes`, `05.3-id-selector`, `06-specificity`, `08-very-specific-rules`. Aplicas la clase `b-blue` a dos párrafos, acumulas varias clases en un mismo elemento, añades un `id` a un `<span>`, sobrescribes el fondo amarillo protegido de `#thirditem` sin borrar nada y pintas las filas alternas de una tabla con `tr:nth-child`.
- **Estilos del mundo real (7 ejercicios)**: `07-practicing-rules`, `09-rounded-image`, `10-anchor-styles`, `11-your-own-font`, `12-font-awesome-icons`, `13-relative-length-em-rem`, `14-anchor-like-button`. Reestilizas una página completa (fondo que se repite en vertical, titulares en `Courier`, un párrafo sobre una capa `rgba` semitransparente, enlaces verdes al pasar el ratón), recortas una foto rectangular en un círculo perfecto, simulas un botón pulsado en 3D con `border-color: #000 #aaa #aaa #000`, importas una fuente de Google, colocas iconos de Font Awesome en una lista, redimensionas titulares con `0.8em` y `0.8rem` y acabas con un enlace naranja que se oscurece al pasar el cursor.

![Resultado esperado del ejercicio 07: una página web completamente reestilizada con una imagen de fondo que se repite en vertical, un titular rojo en Courier, subtítulos subrayados y un párrafo sobre una capa blanca semitransparente creada con rgba](https://raw.githubusercontent.com/4GeeksAcademy/css-tutorial-exercises-course/HEAD/.learn/assets/06-1.png)

![Animación del último ejercicio: un enlace de texto plano convertido en un botón naranja de esquinas redondeadas con 10px de relleno que pasa a darkorange cuando el ratón se sitúa encima](https://raw.githubusercontent.com/4GeeksAcademy/css-tutorial-exercises-course/HEAD/.learn/assets/13-1.gif)

## 🎓 ¿Qué necesitas antes de empezar?

- **HTML básico** es el único requisito real: etiquetas y atributos, la diferencia entre `<head>` y `<body>`, `<ul>` y `<ol>`, `<a>`, `<img>` y `<table>`. Varios ejercicios te entregan un `index.html` terminado y prohíben tocarlo.
- **Nada de JavaScript, React, frameworks ni procesos de compilación.** Solo editas ficheros `.html` y `.css`.
- **Desde el navegador**: basta con una cuenta de GitHub. El repositorio incluye un devcontainer, así que Codespaces te instala todo.
- **En tu ordenador**: Node.js — la imagen del devcontainer es Node 22 — más LearnPack, su plugin de HTML, `jest@29.7.0` y `jest-environment-jsdom@29.7.0`.
- **Tiempo**: el tutorial está catalogado como `easy` y calculado en 8 horas, unos 20–25 minutos por ejercicio.

## ✅ ¿Cómo funciona la corrección automática?

- 21 de las 22 carpetas incluyen un fichero de test: 15 se llaman `tests.js` y 6 `test.js`. La única sin test es `00-welcome`, que es una página de lectura.
- Los tests se ejecutan con **Jest 29.7.0** en el entorno **jsdom**. Cada test lee tu `index.html` y tu `styles.css` directamente del disco, inyecta el CSS en un documento jsdom y examina el resultado.
- La mayoría compara **valores computados de forma exacta**. En `14-anchor-like-button`, por ejemplo, el test consulta `window.getComputedStyle` sobre `.orange-btn` y espera que `padding` sea `10px`, `border-radius` sea `4px` y `text-decoration` sea `none`.
- Varios tests comprueban además que **no** hayas roto el código de partida. El de `06-specificity` verifica que siguen existiendo `ul li { background: blue }` y `li + #thirditem { background: yellow }`, que el `<head>` conserva su `meta` y su `title` y que la hoja de estilos sigue enlazada en `/styles.css`.
- La corrección es deliberadamente rígida. Si un test falla después de un cambio que en pantalla se ve bien, casi siempre es porque un valor, una unidad o un selector no coincide carácter por carácter: tómatelo como una pista, no como una nota.

> 💡 Consejo: ejecuta el ejercicio y mira la vista previa antes de escribir nada. `03.1-background` y `04-list-styling` te piden explícitamente que observes la página original, cambies una propiedad y vuelvas a mirar.

## 💡 ¿Qué errores conviene evitar?

- **Abusar de `!important`.** El ejercicio `06-specificity` lo necesita porque las reglas base están protegidas y no se pueden editar. En el resto de casos, la solución correcta es un selector más específico: de eso trata la cascada.
- **Tocar el bloque protegido.** `08-very-specific-rules` avisa de que solo puedes añadir código *encima* del READ-ONLY BLOCK y de que no debes modificar `index.html`. Los tests fallan en cuanto desaparecen las reglas originales.
- **Confundir `em` con `rem`.** `em` se calcula sobre el `font-size` del padre y `rem` sobre la raíz de la página; por eso el mismo `0.8` produce dos tamaños distintos en los dos contenedores de `13-relative-length-em-rem`.
- **Aplicar `border-radius: 100%` a una imagen rectangular.** El resultado es un óvalo, no un círculo. Fuerza un cuadrado con `width` y `height` y usa `object-fit`, más `object-position` para decidir qué parte de la foto sobrevive al recorte.
- **Separar `background-position` y `background-size` con un espacio.** Ambas aceptan el mismo tipo de valores, así que el atajo exige una barra inclinada: `background: 50px / cover`.
- **Borrar cosas del `<head>`.** Quitar el `<title>`, el `<meta>` o el `<link>` a `styles.css` rompe tests que nada tienen que ver con la propiedad que estabas retocando.
- **Resolverlo con un `style` en línea cuando el ejercicio pide una hoja de estilos.** A partir de `03-separate-stylesheet` los tests leen `styles.css`, así que lo que escribas en otro sitio es invisible para ellos.

## ❓ Preguntas frecuentes

### ¿Cuánto se tarda en aprender CSS con estos ejercicios?

El tutorial declara 8 horas de trabajo estimado para 21 ejercicios corregidos, unos 20–25 minutos cada uno. Quien empieza desde cero y ve el vídeo y sigue todos los enlaces de ayuda debería contar con dos o tres sesiones, no con una.

### ¿Hay que saber HTML o JavaScript antes?

HTML básico sí: necesitas leer un documento e identificar qué etiqueta estás estilizando. JavaScript no hace falta en ningún momento, no escribes ni una línea. (El README antiguo describía cada ejercicio como "una pequeña aplicación de React"; es un error heredado, aquí no hay React por ninguna parte.)

### ¿Tengo que instalar algo para empezar?

No. El repositorio trae un devcontainer, así que abrirlo en GitHub Codespaces te da un editor listo con LearnPack, su plugin de HTML y Jest ya instalados. La instalación local es opcional y requiere Node.js y esos mismos paquetes.

### ¿Es gratis? ¿Puedo reutilizar el contenido?

Abrir y completar los ejercicios no cuesta nada, y el CSS que escribas es tuyo. Ahora bien, el repositorio **no** es de código abierto: `LICENSE.md` reserva todos los derechos de propiedad intelectual y prohíbe expresamente republicar, reproducir, vender, sublicenciar o redistribuir el material. 4Geeks Academy lo publica para uso personal de aprendizaje.

### ¿Sigue mereciendo la pena aprender CSS puro habiendo frameworks?

Sí. Tailwind, Bootstrap y cualquier librería de CSS-in-JS acaban generando las mismas declaraciones que escribes aquí: `padding`, `border-radius`, `background`, `font-size`. La especificidad, la cascada y la diferencia entre `em` y `rem` son justo lo que falla cuando una clase de utilidad "no se aplica", y ningún framework te libra de entenderlas.

### La página se ve bien pero el test sigue fallando, ¿qué hago?

El corrector compara valores computados de forma literal: `4px` no es `0.25rem` para él, `none` no es lo mismo que omitir la declaración, y una regla colocada antes de otra protegida pierde la cascada. Vuelve a leer el enunciado para ver el valor exacto que pide, confirma que editaste el fichero que el ejercicio indica y usa la salida del test como lista de comprobación, no como calificación.

<!-- hide -->
## 📝 Tutoriales relacionados

1. [Aprende HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Aprende Formularios HTML5](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Aprende CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course) ← 🔥 estás aquí
4. [Aprende CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)
5. [Aprende Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)

## 🚀 Cómo empezar

El camino más rápido es [Abrir en Codespaces](https://codespaces.new/4GeeksAcademy/css-tutorial-exercises-course). El devcontainer instala Node 22, LearnPack y Jest por ti, y los ejercicios deberían arrancar solos en cuanto VS Code termine de cargar.

> 💡 Si los ejercicios no arrancan solos, ejecuta `learnpack start` en la terminal.

También puedes seguir el tutorial en la [ficha interactiva de 4Geeks](https://4geeks.com/es/interactive-exercise/css-tutorial-exercises-course).

## 💻 Instalación local

[Clona el repositorio](https://4geeks.com/how-to/github-clone-repository) y, desde la carpeta que contiene `learn.json`:

1. Instala LearnPack, su plugin de HTML y el motor de tests:

   ```bash
   npm i @learnpack/learnpack -g
   learnpack plugins:install @learnpack/html
   npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
   ```

2. Arranca el tutorial:

   ```bash
   learnpack start
   ```

## 📚 Cómo están organizados los ejercicios

Cada ejercicio corregido es una mini web autocontenida dentro de su propia carpeta:

- **`README.md` / `README.es.md`**: las instrucciones, en inglés y en español. 15 de ellas incluyen además un vídeo de YouTube en el front matter.
- **`index.html`**: el marcado de partida. Unos ejercicios te piden editarlo y otros lo prohíben expresamente.
- **`styles.css`**: donde va tu CSS; existe en 16 de los ejercicios.
- **`tests.js`** (o `test.js`): el corrector automático. No necesitas abrirlo nunca.
- **`solution.hide.*`**: la solución de referencia, oculta en la interfaz de LearnPack hasta que la pides.

## 🤝 Colaboradores

- [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — código 💻, idea 🤔, tests ⚠️, revisión de pull requests 👀, documentación 📖
- [Paolo Lucano (@plucodev)](https://github.com/plucodev) — código 💻, tests ⚠️, traducción 🌎
- [Daniel Machota (@d4rkm0nst3r)](https://github.com/d4rkm0nst3r) — pruebas del tutorial ✅, traducción 🌍
- [David Hay (@haydavid23)](https://github.com/haydavid23) — tests ⚠️
- [Charly Chacón (@charlytoc)](https://github.com/charlytoc) — tutoriales y correcciones 🤖

Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors). Toda contribución es bienvenida: reporta incidencias en el [issue tracker de LearnPack](https://github.com/learnpack/learnpack/issues/new).
<!-- endhide -->
