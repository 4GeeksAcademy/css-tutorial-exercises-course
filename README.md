<!-- hide -->
<div align="center">

# Learn CSS with Interactive Exercises

[![Certified 4Geeks tutorial](https://img.shields.io/badge/certified-4Geeks-2563eb)](https://4geeks.com/interactive-exercise/css-tutorial-exercises-course)
[![Autograded with LearnPack](https://img.shields.io/badge/autograded-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![Open in Codespaces](https://img.shields.io/badge/open%20in-Codespaces-fb5a1f?logo=github)](https://codespaces.new/4GeeksAcademy/css-tutorial-exercises-course)

</div>
<!-- endhide -->

This tutorial contains 21 auto-graded CSS exercises plus a welcome guide, estimated at 8 hours of work. You practice the three ways to apply CSS (inline attribute, `<style>` tag, external stylesheet), tag/class/id selectors, specificity and `!important`, backgrounds, list bullets, `border-radius` with `object-fit`, Google Fonts, Font Awesome icons, `em` versus `rem`, and anchor `:hover` and `:active` states. Every exercise is checked by a Jest test.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty**: Easy — designed for absolute beginners
- **Duration**: 8 hours (as declared in `learn.json`)
- **Exercises**: 22 folders inside `exercises/` — 1 welcome page and 21 graded exercises
- **Technologies**: CSS, front-end, web development
- **Grading**: Automatic, 21 test files running on Jest 29.7.0 with `jest-environment-jsdom`
- **Video walkthroughs**: 15 of the 21 graded exercises link a YouTube tutorial, plus an intro video
- **License**: [LICENSE.md](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/HEAD/LICENSE.md) — all rights reserved
- **Languages**: [English](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 What will you learn?

- **The three delivery methods**: the inline `style` attribute, a `<style>` tag in the document, and an external `styles.css` connected with `<link>` — and why the third one is the professional default.
- **Selectors**: tag selectors, `.class`, `#id`, descendant selectors like `ul li`, the adjacent sibling `li + #thirditem`, and pseudo-classes `:hover`, `:active` and `tr:nth-child()`.
- **Specificity and the cascade**: why a rule written earlier can still win, how to beat it with a more specific selector, and when `!important` is the right escape hatch.
- **Colors**: named colors and `rgba()` for semi-transparent layers over a background image.
- **Backgrounds**: `background-size` with `contain` and `cover`, `background-repeat` on the x and y axes, and the `background` shorthand where position and size are separated by a forward slash.
- **Shorthand properties**: collapsing four `padding` declarations into one, and `border-color` + `border-style` + `border-width` into a single `border` line.
- **List styling**: `list-style-type` with `lower-alpha`, `square`, `armenian` and `none`.
- **Image techniques**: circular avatars with `border-radius`, `object-fit` and `object-position` even when the source image is not square.
- **Typography**: importing a Google Font with `<link>` and applying `font-family`, plus Font Awesome icon fonts as an alternative to image icons.
- **Relative units**: `em` (relative to the parent's `font-size`) versus `rem` (relative to the page root).
- **Interactive components**: turning a plain anchor into a button with `padding`, `border-radius`, `text-decoration: none` and a `:hover` color change.

## 👀 What will you build?

The 21 graded exercises live in `exercises/` and run in order. They fall into four blocks:

- **Getting CSS onto the page (6 exercises)**: `01-inline-styles`, `02-style-tag`, `02.1-add-a-style-tag`, `02.2-rbga-colors`, `02.3-your-second-style`, `03-separate-stylesheet`. You paint a table green with an inline attribute, move the same idea into a `<style>` block, flip a red anchor to yellow, and finally push everything into a separate `styles.css`.
- **Backgrounds, lists and shorthands (3 exercises)**: `03.1-background`, `04-list-styling`, `05.1-combined-rules`. You switch a background to `contain` and then to `repeat`, restyle four drink lists into lowercase letters, square bullets, Armenian numerals and no bullets at all, and compress four padding rules and a pile of background rules into two shorthand lines.
- **Selectors and specificity (5 exercises)**: `05-class-selector`, `05.2-apply-several-classes`, `05.3-id-selector`, `06-specificity`, `08-very-specific-rules`. You apply a `b-blue` class to two paragraphs, stack multiple classes on one element, add an `id` to a `<span>`, override a protected yellow `#thirditem` background without deleting anything, and stripe alternating table rows with `tr:nth-child`.
- **Real-world styling (7 exercises)**: `07-practicing-rules`, `09-rounded-image`, `10-anchor-styles`, `11-your-own-font`, `12-font-awesome-icons`, `13-relative-length-em-rem`, `14-anchor-like-button`. You restyle a full page (vertically repeating background image, `Courier` headings, an `rgba` semi-transparent paragraph, green hover links), crop a rectangular photo into a perfect circle, fake a 3D pressed button with `border-color: #000 #aaa #aaa #000`, import a Google Font, drop Font Awesome icons into a list, resize headings with `0.8em` and `0.8rem`, and finish with an orange call-to-action link that darkens on hover.

![Expected result of exercise 07, a fully restyled web page with a vertically repeating background image, a red Courier heading, underlined subheadings and a paragraph sitting on a white semi-transparent rgba layer](https://raw.githubusercontent.com/4GeeksAcademy/css-tutorial-exercises-course/HEAD/.learn/assets/06-1.png)

![Animation of the final exercise: a plain text link styled into an orange rounded button with 10px padding that changes to darkorange when the mouse hovers over it](https://raw.githubusercontent.com/4GeeksAcademy/css-tutorial-exercises-course/HEAD/.learn/assets/13-1.gif)

## 🎓 What do you need before starting?

- **Basic HTML** is the only real prerequisite: tags and attributes, `<head>` versus `<body>`, `<ul>` and `<ol>`, `<a>`, `<img>` and `<table>`. Several exercises hand you a finished `index.html` and forbid touching it.
- **No JavaScript, no React, no build step and no framework.** You edit `.html` and `.css` files only.
- **In the browser**: a GitHub account is enough. The repository ships a devcontainer, so Codespaces installs everything for you.
- **On your own machine**: Node.js — the devcontainer image is Node 22 — plus LearnPack, its HTML plugin, `jest@29.7.0` and `jest-environment-jsdom@29.7.0`.
- **Time**: the tutorial is rated `easy` and budgeted at 8 hours, which works out to roughly 20–25 minutes per exercise.

## ✅ How does the automatic grading work?

- 21 of the 22 folders ship a test file — 15 named `tests.js` and 6 named `test.js`. Only `00-welcome`, which is a reading page, has none.
- The tests run on **Jest 29.7.0** with the **jsdom** environment. Each test reads your `index.html` and `styles.css` straight from disk, injects the CSS into a jsdom document, and inspects the result.
- Most checks compare **computed values exactly**. In `14-anchor-like-button`, for example, the test reads `window.getComputedStyle` on `.orange-btn` and expects `padding` to be `10px`, `border-radius` to be `4px` and `text-decoration` to be `none`.
- Several tests also verify you did **not** break the starter code. The `06-specificity` test asserts that `ul li { background: blue }` and `li + #thirditem { background: yellow }` are still present, that `<head>` still contains its `meta` and `title`, and that the stylesheet is still linked at `/styles.css`.
- Grading is deliberately rigid. A failing test after a change that looks correct on screen usually means a value, a unit or a selector does not match character for character — read it as a hint, not as a verdict on your CSS.

> 💡 Tip: run the exercise and look at the preview before you write anything. Exercises `03.1-background` and `04-list-styling` explicitly ask you to look at the original page first, then change one property and look again.

## 💡 What mistakes should you avoid?

- **Sprinkling `!important` everywhere.** Exercise `06-specificity` needs it because the base rules are protected and cannot be edited. Everywhere else, a more specific selector is the correct fix — that is the whole point of the cascade.
- **Editing the protected block.** Exercise `08-very-specific-rules` states you may only add code *above* the READ-ONLY BLOCK and must not modify `index.html`. Tests fail the moment the original rules disappear.
- **Confusing `em` with `rem`.** `em` scales from the parent's `font-size`, `rem` from the page root, which is why the same `0.8` value produces two different sizes in the two containers of exercise `13-relative-length-em-rem`.
- **Applying `border-radius: 100%` to a rectangular image.** You get an oval, not a circle. Force a square with `width` and `height`, then use `object-fit` — and `object-position` to choose which part of the photo survives the crop.
- **Separating `background-position` and `background-size` with a space.** Both accept the same kinds of values, so the shorthand needs a forward slash: `background: 50px / cover`.
- **Deleting things in `<head>`.** Removing the `<title>`, the `<meta>` or the `<link>` to `styles.css` breaks tests that have nothing to do with the property you were styling.
- **Solving it with an inline `style` attribute when the exercise asks for a stylesheet.** From `03-separate-stylesheet` onward, the tests read `styles.css`, so styles written elsewhere are invisible to them.

## ❓ Frequently asked questions

### How long does it take to learn CSS with these exercises?

The tutorial declares 8 hours of estimated work for 21 graded exercises — around 20–25 minutes each. Complete beginners who watch the video walkthrough and follow every hint link should plan for two or three sittings rather than one.

### Do I need to know HTML or JavaScript first?

Basic HTML, yes: you must be able to read a document and identify which tag you are styling. JavaScript is not required at any point — you never write a line of it. (The old README described each exercise as "a small React application"; that is inaccurate, there is no React in this repository.)

### Do I have to install anything to start?

No. The repository includes a devcontainer, so opening it in GitHub Codespaces gives you a ready-to-code editor with LearnPack, its HTML plugin and Jest already installed. Local installation is optional and needs Node.js plus those same packages.

### Is this tutorial free, and can I reuse the content?

Opening and completing the exercises costs nothing, and the CSS you write is yours. The repository is **not** open source, though: `LICENSE.md` reserves all intellectual property rights and explicitly forbids republishing, reproducing, selling, sub-licensing or redistributing the material. 4Geeks Academy publishes the tutorial for personal learning use.

### Is learning plain CSS still worth it when frameworks exist?

Yes. Tailwind, Bootstrap and every CSS-in-JS library ultimately emit the same declarations you write here — `padding`, `border-radius`, `background`, `font-size`. Specificity, the cascade and the difference between `em` and `rem` are exactly the concepts that go wrong when a utility class "doesn't apply", and no framework removes them.

### The page looks right but the test still fails — what now?

The grader compares computed values literally. `4px` is not `0.25rem` to it, `none` is not the absence of a declaration, and a rule placed before a protected one loses the cascade. Re-read the instruction for the exact value it asks for, confirm you edited the file the exercise names, and treat the test output as a checklist rather than a grade.

<!-- hide -->
## 📝 Related tutorials

1. [Learn HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Learn HTML5 Forms](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Learn CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course) ← 🔥 you are here
4. [Learn CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)
5. [Learn Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)

## 🚀 How to start

The fastest path is [Open in Codespaces](https://codespaces.new/4GeeksAcademy/css-tutorial-exercises-course). The devcontainer installs Node 22, LearnPack and Jest for you, and the exercises should open automatically once VS Code finishes loading.

> 💡 If the exercises do not start on their own, run `learnpack start` in the terminal.

You can also follow the tutorial on the [4Geeks interactive exercise page](https://4geeks.com/interactive-exercise/css-tutorial-exercises-course).

## 💻 Local installation

[Clone the repository](https://4geeks.com/how-to/github-clone-repository) and then, from the folder that contains `learn.json`:

1. Install LearnPack, its HTML plugin and the test runner:

   ```bash
   npm i @learnpack/learnpack -g
   learnpack plugins:install @learnpack/html
   npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
   ```

2. Start the tutorial:

   ```bash
   learnpack start
   ```

## 📚 How the exercises are organized

Every graded exercise is a self-contained mini website inside its own folder:

- **`README.md` / `README.es.md`**: the instructions, in English and Spanish. 15 of them also embed a YouTube walkthrough in the front matter.
- **`index.html`**: the starting markup. Some exercises ask you to edit it, others explicitly forbid it.
- **`styles.css`**: where your CSS goes — present in 16 of the exercises.
- **`tests.js`** (or `test.js`): the automatic grader. You never need to open it.
- **`solution.hide.*`**: the reference solution, hidden from the LearnPack interface until you ask for it.

## 🤝 Contributors

- [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — code 💻, idea 🤔, tests ⚠️, pull request review 👀, documentation 📖
- [Paolo Lucano (@plucodev)](https://github.com/plucodev) — code 💻, tests ⚠️, translation 🌎
- [Daniel Machota (@d4rkm0nst3r)](https://github.com/d4rkm0nst3r) — tutorial run ✅, translation 🌍
- [David Hay (@haydavid23)](https://github.com/haydavid23) — tests ⚠️
- [Charly Chacón (@charlytoc)](https://github.com/charlytoc) — tutorials and corrections 🤖

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome — report issues at the [LearnPack issue tracker](https://github.com/learnpack/learnpack/issues/new).
<!-- endhide -->
