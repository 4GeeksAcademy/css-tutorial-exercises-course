---
tutorial: "https://www.youtube.com/watch?v=c5JeXOnI-Sg"
---

# `00.1` Inline styles


CSS trata sobre agregar estilos (styles) y diseños a tus etiquetas y elementos HTML.

Como siempre en la vida, hay varias formas de aplicar estilos: Utilizar "inline styles" o "estilos en linea" es una manera inicialmente sencillas de hacerlo, pero no se recomienda porque termina siendo mas compleja mas adelante. Sin embargo, vamos a mostrarte algunos ejemplos porque es un conocimiento que debes manejar y todavia se utiliza en algunos casos como los correos electrónicos.

Para usar estilos inline, en lugar de declarar una etiqueta `<style>` en el `<head>` del documento, debes establecer el atributo `style` de cualquier elemento con el código CSS que necesitas aplicar a ese elemento específico.

Por ejemplo:

```html
<a href="google.com" style="color: red; font-size: 14px;">Go to google</a>
```

Estableceremos el color de este enlace específico a rojo (`red`) y el tamaño de fuente (`font-size`) en `14px`.

*Puedes agregar tantas reglas CSS como desees, dentro de la misma línea, separadas por punto y coma.*

## 📝 Instrucciones

1. Dentro del archivo `index.html`, crea la estructura básica de una página html con las etiquetas `<html>`, `<head>` y `<body>` adecuadas.
2. Dentro del cuerpo de la página, crea una etiqueta `<h1>` que diga "¡¡¡HOLA MUNDO!!!".
3. Establece un estilo en línea para cambiar el color del texto de la etiqueta a `color: orangered` y dale un borde rojo sólido de 1px.

### 💡 Consejo:

- Una forma conveniente de importar la estructura básica html de tu página web es simplemente teclear un signo de exclamación `!` y seleccionar la opción emmet que aparecerá en VSCode.
- Lee cómo aplicar bordes aquí: https://www.w3schools.com/css/css_border_shorthand.asp
- Para este ejercicio, NO uses el archivo `styles.css` ni la etiqueta `<style>`.
