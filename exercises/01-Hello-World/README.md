---
tutorial: "https://www.youtube.com/watch?v=rbtHLA813pU"
---
# `01` Hello World in CSS

CSS is about adding styles to our HTML elements. 
The most basic way to apply a style to an HTML element is to use the html `style` attribute within the tag. This is called "inline styles" and works like this:

```HTML
<a href="google.com" style="color: red; font-size: 14px;">Go to google</a>
```

This will set the text color of the link above to red, and the font size to 14 pixels.
In contemporary web design this way of applying styles is discouraged, because it is not efficient - you have to apply styles tag by tag. But you will run into examples of it and need to be familiar with it.   

To apply styles you always have to follow thеse steps:

1. Read the HTML and pick what element you want to decorate to apply CSS to it.
2. Apply the style with the `style` attribute as above. 

That is it! The rest is just semantics! 😁


## 📝 Instructions

1. Within the `index.html` file, create the basic structure of an html page with the appropriate `<html>`, `<head>` and `<body>` tags.
2. Inside of the body of the page, create an `<h1>` tag that reads "HELLO WORLD!!!".
1. Set an inline style to change the text color of the tag to `color: orangered` and give it a solid red border of 1px. 


### 💡 Hint:

- A convenient way to import the basic html structure of your web page is to just type an exclamation mark `!` and select the emmet option that will pop up in Gitpod. 
- Read how to apply borders here: https://www.w3schools.com/css/css_border_shorthand.asp
- For this exercise, do NOT use `styles.css` file or `<style>` tag.

