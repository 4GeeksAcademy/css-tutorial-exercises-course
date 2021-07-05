---
tutorial: "https://www.youtube.com/watch?v=rbtHLA813pU"
---

# `01` Hello World en CSS

CSS trata sobre estilos (styles). Para aplicar estilos, siempre debes seguir estos pasos:

1. Lee el HTML y elije qué elemento deseas decorar o aplicar estilos.
1. Programáticamente selecciona el elemento que deseas decorar con los selectores de CSS.
2. Escribe el estilo que quieras usando las reglas CSS.

¡Eso es todo! El resto es solo semántica. 😁

Mira este ejemplo:

```HTML
<style>
    a {
        /* cambia este estilo a yellow */
        color: pink;
    }
</style>
<a href="https://google.com" target="_blank">Click me to open google.com</a>
```

Tenemos un enlace de HTML `<a>` que lleva a las personas a google.com cuando se hace clic.
Usamos CSS para selectionar todas las etiquetas `<a>` y luego hacerlas `pink`.

## 📝 Instrucciones

Pega este código en tu sitio web para ver los resultados.

## 💻 Preview

Debería verse así:

![01 Hello World Exercise Preview](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/master/.learn/assets/01-1.png?raw=true)