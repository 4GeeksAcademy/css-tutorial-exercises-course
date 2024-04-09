---
tutorial: "https://www.youtube.com/watch?v=9WrVN0rOg_k"
---
# `02` Style tag in CSS

Otra manera que existe de aplicar estilos es utilizar una etiqueta `<style>` en lugar de la propiedad `style`, siempre debes seguir estos pasos:

1. Lee el HTML y elige qué elemento deseas decorar o aplicarle estilos.

2. Programáticamente selecciona el elemento que deseas decorar con los selectores de CSS.

3. Escribe el estilo que quieras usando las reglas CSS.

Es importante aclarar que tu codigo CSS debe estar encerrado dentro de etiquetas `<style>`.

Mira este ejemplo:

```html
<style>
    a {
        color: pink;
    }
</style>
<a href="https://google.com" target="_blank">Click me to open google.com</a>
```

Tenemos un enlace de HTML `<a>` que lleva a las personas a google.com cuando se hace clic.
Usamos CSS para seleccionar todas las etiquetas `<a>` y luego hacerlas rosa (`pink`).

## 📝 Instrucciones:

1. Pega este código en tu sitio web para ver los resultados.

## 💻 Vista previa:

Debería verse así:

![Style tag resultado esperado](../../.learn/assets/01-1.png?raw=true)
