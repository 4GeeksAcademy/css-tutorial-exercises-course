const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

describe("All the styles should be applied", () => {
  const meta = document.querySelector("meta")
  const title = document.querySelector('title')
  const link = document.querySelector('link')

  const img = document.querySelector(".rounded")

  test("The <img> tag should exist", () => {
    expect(img).toBeTruthy();
  })

  test("The width of the <img> tag should be equal to its height and vice versa", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;

    let width = "";
    let height = "";
    
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".rounded") {
        width = cssArray[i].style["width"];
        height = cssArray[i].style["height"];
      }
    }

    // checks if styles return empty string "" or undefined 
    expect(width).toBeTruthy();
    expect(height).toBeTruthy();

    expect(width).toBe(height);
    expect(height).toBe(width);
  });

  test("The object-fit value of the <img> tag should be 'cover'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let imgStyle = window.getComputedStyle(img);
    expect(imgStyle["object-fit"]).toBe("cover");
  });

  test("The object-position value of the <img> tag should be 'top'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let imgStyle = window.getComputedStyle(img);
    expect(imgStyle["object-position"]).toBe("top");
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
