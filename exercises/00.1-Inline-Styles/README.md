---
tutorial: 'https://www.youtube.com/watch?v=h9WPp8gPMS8'
---

# `00.1` Inline styles

CSS deals with adding styles and designs to your HTML tags and elements.

As always in life, there are several ways to apply styles: Using "inline styles" is initially a straightforward way to do it, but it's not recommended because it becomes more complex later on. However, we'll show you some examples because it's knowledge you should handle, and it's still used in some cases like emails.

To use inline styles, instead of declaring a `<style>` tag in the `<head>` of the document, you should set the `style` attribute of any element with the CSS code you need to apply to that specific element.

For example:

```HTML
<a href="google.com" style="color: red; font-size: 14px;">Go to google</a>
```

We will set the color of this specific link to red (red) and the font size (font-size) to 14px.

_You can add as many CSS rules as you want, within the same line, separated by a semicolon._

## 📝 Instructions:

1. Dentro del archivo `index.html`, crea la estructura básica de una página HTML con las etiquetas <html>, <head> y <body> adecuadas.

2. Within the body of the page, create an <h1> tag that says "HELLO WORLD!!!".

3. Set an inline style to change the text color of the tag to `color: orangered` and give it a solid red border of 1px

### 💡 Hint:

- A convenient way to import the basic HTML structure of your web page is to simply type an exclamation mark `!` and select the emmet option that will appear in VSCode.
- Read about applying borders here: https://www.w3schools.com/css/css_border_shorthand.asp
- For this exercise, DO NOT use the `styles.css` file or the <style> tag.
