# `04.1` Reglas Combinadas

Los archivos CSS ocupan espacio en tu servidor y también tardan en descargarse (como todo); es otro documento de texto que el navegador debe descargar antes de mostrar la página, por lo que es importante mantener el documento CSS lo más pequeño posible.

Una forma de hacerlo es combinando varias propiedades en una, como con "border":

```css
border-color: black;
border-style: solid;
border-width: 1px;
```

Las propiedades de border se pueden consolidar en una sola línea así:

```css
border: black 1px solid;
```

# 📝 Instrucciones:


1. Combina las 4 reglas de padding en una sola utilizando la regla `padding`.

2. Combina todas las reglas de background, menos el `background-size`, en una sola línea usando la regla `background:`.

*El `background-size` no se puede combinar, los navegadores aún no lo admiten.*

## Pista:

- Como usar el background-size: http://lmgtfy.com/?q=css+background
- Como usar el padding: http://lmgtfy.com/?q=css+padding
