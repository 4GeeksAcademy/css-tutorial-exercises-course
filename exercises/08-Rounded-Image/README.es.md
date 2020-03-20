# `08` Imagen Redondeada

¡Muchos sitios web usan imágenes de perfil redondeadas, una técnica que realmente hace que un sitio web sea más hermoso!

La forma obvia de crear una imagen de perfil redondeada es crear una etiqueta de imagen y aplicar un border-radius: 100%. El problema con este enfoque es que solo funciona para imágenes cuadradas ... las imágenes de perfil con diferentes alturas y anchos no se verán como un círculo, se verán como óvalos:

![Example Image](http://i.imgur.com/H7btEoU.png)

En lugar de hacerlo, el enfoque correcto será crear un div cuadrado (a.ka: con igual ancho y alto), asignar la imagen como background y luego aplicar un border-radius a ese div.

Si la imagen termina siendo más grande que el div (o con diferentes proporciones), podemos ajustar la background-position o el background-size para elegir qué parte de la imagen queremos mostrar dentro del círculo.

## 📝 Instrucciones:


1. En lugar de hacerlo, el enfoque correcto será crear
un div cuadrado (es decir: con igual ancho y alto), 
asignar la imagen como fondo y luego aplicar 
un borde-radius a ese div.

2. Si la imagen termina siendo más grande que el div
 (o con diferentes proporciones), podemos ajustar 
 el background-position o background-size para elegir 
 qué parte de la imagen queremos mostrar dentro del círculo.

