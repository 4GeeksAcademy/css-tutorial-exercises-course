# `05` Specificity

When creating a CSS document, you need to start from the most generic selector and end with the most specific ones, that is the way CSS works.

It's all about the level of Specificity.
If you specify that your div with id="thirditem" has a blue background, and later in the document you specify that all divs will have yellow background, #thirditem will keep his blue background. Period!

Because the more specific, the more priority it has.
Instructions
Override the background-color of #thirditem without deleting any css code, simply append to the css a more specific rule at the end of the document to override the background-color to green.

Tip
You can use the !important annotation
https://css-tricks.com/when-using-important-is-the-right-choice/

## 📝 Instructions:

Run the exercise.
Change the background-size to "contain" (check the index.css tab).
Run the exercise again.
Change the background-repeat to inherit to make it repeat over the x axis and y axis.
Run the exercise again.

Hint:

- How to use the background-size: http://lmgtfy.com/?q=css+background-size
