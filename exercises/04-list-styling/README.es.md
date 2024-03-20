---
tutorial: "https://www.youtube.com/watch?v=qcx31wUVmqI"
---

# `04` List styling

En el desarrollo front end, a menudo tenemos que listar ítems y la forma de hacerlo es con las etiquetas `<ul>`, para listas desordenadas o con viñetas, y las etiquetas `<ol>` para listas ordenadas o numeradas.

Tenemos control mediante CSS sobre cómo se ven estas listas, qué viñetas o números usan, etc.

Por ejemplo:

```html
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
```

Eliminará los números o viñetas y moverá el texto hacia la izquierda para que no haya espacio vacío donde una vez estuvieron las viñetas.

**Nota:**

Construye el código existente primero para ver cómo se ve originalmente la página.
Luego, realiza los cambios a continuación y construye de nuevo.

## 📝 Instrucciones:

1. Convierte los números de las bebidas Coca Cola en letras minúsculas.
2. Convierte los números de las bebidas Pepsi en viñetas cuadradas.
3. Convierte las viñetas de las bebidas Saludables en números armenios.
4. Elimina completamente las viñetas y el espacio extra de Web-developer drinks.

## 💡 Pistas:

- Cómo trabajar con estilos de lista en CSS: https://www.w3schools.com/css/css_list.asp
- Cambiar viñetas por números y viceversa significa que necesitarías cambiar el tipo de lista, ordenada o no ordenada. Es posible que se requieran cambios en las etiquetas HTML.
- `armenian` es un valor posible real de `list-style-type`: https://www.w3schools.com/cssref/pr_list-style-type.asp