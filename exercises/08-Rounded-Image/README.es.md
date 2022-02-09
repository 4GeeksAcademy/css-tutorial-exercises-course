# `08` Imagen Redondeada

Muchos sitios web usan imágenes de perfil redondeadas ¡una técnica que realmente hace que un sitio web sea más hermoso!

La forma obvia de crear una imagen de perfil redondeada es crear una etiqueta de imagen y aplicar un `border-radius: 100%`. 

El problema con este enfoque es que solo funciona para imágenes cuadradas... Las imágenes de perfil generalmente tienen diferente altura y ancho no se verán como un círculo, se verán como óvalos:

![Example Image](../../.learn/assets/08-1.png?raw=true)

## 📝 Instrucciones:

1. Usa `border-radius`.

2.  Adicionalmente a `border-radius`, tenemos que también utilizar la propiedad `object-fit`, [aqui hay una explicación](https://www.loom.com/share/15186e456dfd4741887997af40325721).

## 💡 Pista:

+ Si la imagen es más grande que el `div` y quieres centrarla o enfocarte en una zona en particular puedes utilizar `object-position`.

+ En este articulo puedes leer más [sobre la propiedad object fit](https://css-tricks.com/on-object-fit-and-object-position/)
