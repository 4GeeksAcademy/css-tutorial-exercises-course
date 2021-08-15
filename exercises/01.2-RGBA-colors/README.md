---
tutorial: "https://www.youtube.com/watch?v=8b12AFC6bWs"
---

# `01.2` RGBA colors

So far we have specified CSS colors using the predefined color names provided to us by CSS3, like `red` or `blue`. But these colors are limited and a beautiful frontend design requires much more creativity.  

We have other types of values at our disposal, like RGB, HEX and RGBA.

You can learn more about them here:
https://www.w3schools.com/css/css_colors.asp

For example, this is the code if you want to make your anchor's background a "tomato" color with rgb:

```css
a {
  color: rgb(255, 99, 71);
}
```

And this is how you can make your anchor's background "light tomato" or "50% tomato":

```css
a {
  color: rgba(255, 99, 71, 0.5);
}
```

The `a` in `rgba` expresses the transparency of the color. The lower the number, the more transparent the color is, and it allows the color underneath it to seep through.

So when you apply `0.5` at the end of the "tomato" color, the anchor's background becomes 50% transparent and allows the white background underneath to make it appear lighter.

## 📝 Instructions:

1. Target both your anchors with the same selector in the `<style>` tag to change both of their text colors to white, using an `rgb` color value.
2. Give your two anchors individual classes.
2. Use these classes as separate selectors to apply the first color from the example as background to the first anchor, and the second color as background to the second anchor.
3. Observe the difference. Colorwise, it is the same color, just different intensity.  
