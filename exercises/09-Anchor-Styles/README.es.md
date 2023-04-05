# `09` Estilos de enlaces (anchor) 3D

A las personas les gusta sentir que están haciendo clic en algo, una manera de lograrlo es fingir un efecto 3D. Para hacerlo, los diseñadores normalmente juegan con los bordes, por ejemplo:

![Example Image](../../.learn/assets/09-1.png?raw=true)

Puedes controlar qué reglas CSS se aplican a cada estado de un `anchor` utilizando los selectores: `:hover` (cuando pasas por encima con el mouse) o `active` (cuando haces clic), por ejemplo:

```css
a:active {
  /* aquí puedes especificar cualquier regla de CSS que aplique al anchor mientras se presiona' */
}
```

## 📝 Instrucciones:

1. Cambia los colores del borde del anchor, cuando le das clic, a lo siguiente:

```css
border-color: #000 #aaa #aaa #000;
```
