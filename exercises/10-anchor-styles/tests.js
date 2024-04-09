const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

let cssArray = null;

describe("All the styles should be applied", () => {
  const meta = document.querySelector("meta")
  const title = document.querySelector('title')
  const link = document.querySelector('link')
  test("You should not add your rules above the existing code", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules[0].selectorText;
    expect(cssArray).toBe(".threeDimension");
  })

  test("The <a> tag in the index.html should not be deleted", () => {
    // we can read from the source code
    // console.log(html.toString());
    expect(html.toString().indexOf(`<a`) > -1).toBeTruthy();
  });


  test("The border-color rule for the 'a.threeDimension:active' selector should match the instruction color", () => {
    // get computed styles of any element you like
    // let cssArray=document.styleSheets[0].cssRules;
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules;

    let orangeHoverSelector = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === "a.threeDimension:active") {
        orangeHoverSelector = cssArray[i].style['border-color'];
      }
    }
    expect(orangeHoverSelector).toBe("#000 #aaa #aaa #000");

  });
  test("You should not change the default styles", () => {
    // get computed styles of any element you like
    // let cssArray=document.styleSheets[0].cssRules;
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules;

    let borderColor = "";
    let color = "";
    let background = "";
    let width = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".threeDimension") {
        borderColor = cssArray[i].style["border-color"];
        color = cssArray[i].style['color'];
        background = cssArray[i].style['background'];
        width = cssArray[i].style['width'];
        expect(borderColor).toBe("#aaa #000 #000 #aaa");
        expect(color).toBe("black");
        expect(background).toBe("#fc0");
        expect(width).toBe("8em");
      }
    }

  });

  test("You should not change the existing <head> tag elements", () => {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    expect(meta).toBeTruthy()

    let href = link.getAttribute('href')
    expect(href).toBe('./styles.css')

    expect(title).toBeTruthy()
  })
});


