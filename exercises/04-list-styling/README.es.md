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

Ejecuta el código existente primero para ver cómo se ve originalmente la página. Luego, realiza los cambios a continuación y construye de nuevo.

## 📝 Instrucciones:

La regla `list-style-type` tiene muchos valores interesantes, utilizala para lograr:

1. Conviertir los números de las bebidas de Coca Cola en letras minúsculas (Usa `lower-alpha`).
2. Conviertir los números de las bebidas de Pepsi en viñetas cuadradas.
3. Conviertir las viñetas de las bebidas Saludables en números armenios.
4. Eliminar completamente las viñetas de las bebidas de web-developer.

## 💡 Pistas:

- Cómo trabajar con estilos de lista en CSS: https://www.w3schools.com/css/css_list.asp
- Cambiar viñetas por números y viceversa significa que necesitarías cambiar el tipo de lista, ordenada o no ordenada. Es posible que se requieran cambios en las etiquetas HTML.
- `armenian` es un valor posible real de `list-style-type`: https://www.w3schools.com/cssref/pr_list-style-type.asp
- `lower-alpha` es un valor posible real de `list-style-type`.

