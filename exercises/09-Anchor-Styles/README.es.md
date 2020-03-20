# `09` Estilos de enlaces 3D

A las personas les gusta sentir que están haciendo clic en algo, un gran enfoque para lograrlo es fingir un efecto 3D. Para hacerlo, los diseñadores normalmente juegan con los bordes. Ejemplo:

![Example Image](http://i.imgur.com/kLPzBXc.png)

Puede controlar qué reglas css se aplican a cada estado de un enlace utilizando los selectores: "hover" (para el mouse) o "active" (para presionar el mouse), por ejemplo:

```css
a:active {
  /* aquí puedes especificar cualquier regla de css que aplique
   al anchor mientras se presiona' */
}
```

## 📝 Instrucciones:


1. Cambie los colores del borde del enlace, cuando se presione, a lo siguiente:

```css
border-color: #000 #aaa #aaa #000;
```
