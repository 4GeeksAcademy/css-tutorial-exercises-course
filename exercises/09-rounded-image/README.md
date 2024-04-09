# `09` Rounded Image

A lot of websites use rounded profile images, a technique that really makes a website more beautiful!

The obvious way to create a rounded profile picture is to create an image tag and apply `border-radius:100%`. 

The problem with this approach is that it only works for squared pictures... Profile pictures with different height and width will not look like a circle, they will look like ovals:

![Example Image](../../.learn/assets/08-1.png?raw=true)

## 📝 Instructions:

1. Use `border-radius`.

2. Use the properties `width` and `height` to make the image a square shape.

3. In this case, in addition to `border-radius`, you will have to use the `object-fit` CSS property, [here is an explanation](https://www.loom.com/share/15186e456dfd4741887997af40325721).


## 💡 Hints:

+ If the image ends up being bigger than its container (or with different proportions) you can adjust the `object-position` to choose what part of the image you want to display inside of the circle.

+ You can also read [this great article about `object-fit`](https://css-tricks.com/on-object-fit-and-object-position/).

+ Additionally you can [read the documentation on `object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) and [the documentation on `object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
