---
tutorial: "https://www.youtube.com/watch?v=iDwXZoQR8EM"
---
# `02` Style tag in CSS

Another way to apply styles, is by using a `<style>` tag instead of the `style` property. You always have to follow these steps:

1. Read the HTML and pick what element (tag) you want to decorate or apply styles to.

2. Programmatically select the element you want to style using [CSS Selectors](https://4geeks.com/lesson/what-is-css-learn-css#wait-what-is-a-selector).

3. Write the styling that you want by using [CSS property rules](https://4geeks.com/lesson/what-is-css-learn-css#properties).

But make sure your CSS code is wrapped inside a `<style>` tag.

Look at this example:

```html
<style>
    a {
        color: pink;
    }
</style>
<a href="https://google.com" target="_blank">Click me to open google.com</a>
```

We have an HTML anchor `<a>` that takes people to google.com when clicked.
We use CSS to select all the anchor tags and make them pink.

## 📝 Instructions:

1. Paste this code on your website to see the results.

## 💻 Preview:

It should look like this:

![Style tag expected result](../../.learn/assets/01-1.png?raw=true)
