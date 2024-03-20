---
tutorial: "https://www.youtube.com/watch?v=3JxXkhxyAnI"
---

# `06` Specificity

When creating a CSS document, you need to start from the most generic selectors and end with the most specific ones, that is the way CSS works.

It's all about the level of **specificity**. If you specify that your `div` with `id="thirditem` has a yellow background, and later in the document you specify that all `divs` will have blue background, `#thirditem` will keep his yellow background. punto!

*Because the more specific, the more priority it has.* 

## 📝 Instructions:

1. Override the `background` of `#thirditem` without deleting any CSS code, simply append to the CSS a more specific rule at the end of the document to override the background-color to green.

## 💡 Hint:

You can use the `!important` annotation:
https://css-tricks.com/when-using-important-is-the-right-choice/


