---
tutorial: "https://youtu.be/watch?v=uQS5QeEE-B4"
---

# `04.1` Combined Rules

CSS files take space on your server and also take time to download (like everything); it is yet another text document that the browser has to download before rendering the page, which is why is important to keep the CSS document as small as possible.

One way to do that is by combining several properties into one such as with `border`:

```css
border-color: black;
border-style: solid;
border-width: 1px;
```

Border's properties can be consolidated into a single line as:

```css
border: black 1px solid;
```

## 📝 Instructions:

1. Combine the 4 padding rules into just one using the `padding` rule.

2. Combine the all background rules, but the background size, into just one line using the "background:" rule.

*The background size cannot be combined, the browsers don't support it yet.*

## Hint:

- How to use the background-size: http://lmgtfy.com/?q=css+background

- How to use the padding: http://lmgtfy.com/?q=css+padding
