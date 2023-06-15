# `03` Inline Styles

Los estilos `inline` (estilos en línea) son una muy mala idea a menos que no tengas otra opción (y esa es una situación muy poco común). Lamentablemente, tenemos que enseñarte cómo hacerlo porque existe la posibilidad de que necesites usarlos en algún momento.

Para usar estilos inline, en lugar de declarar una etiqueta `<style>` en el `<head>` del documento, debes establecer el atributo `style` de cualquier elemento con el código CSS que necesitas aplicar a ese elemento específico.

Por ejemplo:

```html
<a href="google.com" style="color: red; font-size: 14px;">Go to google</a>
```

Estableceremos el color de este enlace específico a rojo (`red`) y el tamaño de fuente (`font-size`) en `14px`.

*Puedes agregar tantas reglas CSS como desees, dentro de la misma línea, separadas por punto y coma.*

## 📝 Instrucciones:


1. Establece un estilo inline para cambiar el color de fondo de la tabla a verde (green). Para este ejercicio, NO uses el styles.css :(

### 💡 Pista:

- Como usar el background-color: https://www.w3schools.com/cssref/pr_background-color.php
