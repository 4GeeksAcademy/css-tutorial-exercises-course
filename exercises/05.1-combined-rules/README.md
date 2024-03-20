---
tutorial: "https://www.youtube.com/watch?v=VTOwd98T6FY"
---

# `05.1` Combined Rules

CSS files take up space on your server and also take time to download (like everything); it is yet another text document that the browser has to download before rendering the page, which is why it's important to keep the CSS document as small as possible.

One way to do that is by combining several properties into one, such as with `border`:

```css
border-color: black;
border-style: solid;
border-width: 1px;
```

Border's properties can be consolidated into a single line like this:

```css
border: black 1px solid;
```

## 📝 Instructions:

1. Combine the 4 padding rules into only one using the `padding` rule.

2. Combine all background rules into only one using the `background` rule.

*The `background-position` and the `background-size` properties will conflict because they can handle the same type of values, so instead of separating these properties with a `space` you must separate them with a forward slash `/` as follows:*

```css
background: 50px / cover
```

Where the left side value of the forward slash `/` is the `background-position` rule and the right value is the `background-size` rule.

## 💡 Hints:

- How to use `background`: https://www.w3schools.com/cssref/css3_pr_background.php

- How to use `padding`: https://www.w3schools.com/css/css_padding.asp
