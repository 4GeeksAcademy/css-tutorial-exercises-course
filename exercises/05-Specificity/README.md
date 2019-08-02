# `05` Specificity

When creating a CSS document, you need to start from the most generic selector and end with the most specific ones, that is the way CSS works.

It's all about the level of Specificity.
If you specify that your div with id="thirditem" has a blue background, and later in the document you specify that all divs will have yellow background, #thirditem will keep his blue background. Period!

Because the more specific, the more priority it has.

## 📝 Instructions:

1. Override the background-color of #thirditem without deleting any css code, simply append to the css a more specific rule at the end of the document to override the background-color to green.

Tip:

You can use the **!important** annotation:
https://css-tricks.com/when-using-important-is-the-right-choice/

Hint:

- How to use the background-size: http://lmgtfy.com/?q=css+background-size
