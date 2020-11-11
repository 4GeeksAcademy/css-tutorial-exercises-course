# `08` Imagen Redondeada

Muchos sitios web usan imágenes de perfil redondeadas ¡una técnica que realmente hace que un sitio web sea más hermoso!

La forma obvia de crear una imagen de perfil redondeada es crear una etiqueta de imagen y aplicar un border-radius: 100%. El problema con este enfoque es que solo funciona para imágenes cuadradas ... las imágenes de perfil con diferentes altura y ancho no se verán como un círculo, se verán como óvalos:

![Example Image](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/master/.learn/assets/08-1.png?raw=true)

## 📝 Instrucciones:

1. En lugar de hacerlo, el enfoque correcto será crear un div cuadrado (es decir: con igual ancho y alto), asignar la imagen como fondo y luego aplicar un borde-radius a ese div.

2. Si la imagen termina siendo más grande que el div (o con diferentes proporciones), podemos ajustar 
el background-position o background-size para elegir 
 qué parte de la imagen queremos mostrar dentro del círculo.

