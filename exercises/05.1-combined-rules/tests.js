const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock("fs");

describe("All the styles should be applied", ()=> {
  const body = document.querySelector("body");
  const link = document.querySelector("link");
  const title = document.querySelector('title');

  test("The <body> tag should not contain any inline style", ()=> {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let emptyBodyInlineStyle = {};
    expect(body.style._values).toEqual(emptyBodyInlineStyle);
  });

  test("The width should be '50px'", ()=> {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let orangeHoverSelector = "";

    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".myBox") {
        orangeHoverSelector = cssArray[i].style.width;
      }
    }

    expect(orangeHoverSelector).toBe('50px');
  });

  test("The height should be '50px'", ()=> {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let orangeHoverSelector = "";

    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".myBox") {
        orangeHoverSelector = cssArray[i].style.height;
      }
    }

    expect(orangeHoverSelector).toBe('50px');
  });

  test("The background should include the shorthand property", ()=> {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let orangeHoverSelector = "";
    let backImg = "";
    let backColor = "";
    let backPos = "";
    let backRepeat = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".myBox") {
        orangeHoverSelector = cssArray[i].style.background;
        backImg = cssArray[i].style['background-image'];
        backColor = cssArray[i].style['background-color'];
        backPos = cssArray[i].style['background-position-x'];
        backRepeat = cssArray[i].style['background-repeat'];
      }
    }
    expect(backColor).toBeFalsy();
    expect(backImg).toBeFalsy();
    expect(backPos).toBeFalsy();
    expect(backRepeat).toBeFalsy();
    expect(orangeHoverSelector).toContain('rgb(189, 189, 189)');
    expect(orangeHoverSelector).toContain('no-repeat');
    expect(orangeHoverSelector).toContain('100px');
    expect(orangeHoverSelector).toContain('url(https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/3a2d1dd03f58167a5a4894155af2d3aa4d41d647/.learn/assets/baby.jpg?raw=true)');
  });

  test("The padding should include the shorthand property in the right order (top, right, bottom, left)", ()=> {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    // console.log("$$$:", cssArray)
    let orangeHoverSelector = "";
    let padTop = "";
    let padRight = "";
    let padBottom = "";
    let padLeft = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".myBox") {
        orangeHoverSelector = cssArray[i].style.padding;
        padTop = cssArray[i].style['padding-top']
        padRight = cssArray[i].style['padding-right']
        padBottom = cssArray[i].style['padding-bottom']
        padLeft = cssArray[i].style['padding-left']
      }
    }
    expect(orangeHoverSelector).toBe('10px 190px 50px 30px');
    expect(padTop).toBeFalsy();
    expect(padRight).toBeFalsy();
    expect(padBottom).toBeFalsy();
    expect(padLeft).toBeFalsy();
  });

  test("You should not change the existing <head> tag elements", ()=> {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    let meta = head.querySelector("meta")
    expect(meta).toBe(null)

    const href = link.getAttribute("href")
    expect(href).toBe('./styles.css')

    expect(title).toBeTruthy()
  })
});
