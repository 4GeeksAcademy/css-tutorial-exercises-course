const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

describe("All the styles should be applied", () => {
  let meta = document.querySelector("meta")
  let link = document.querySelector("link")
  let title = document.querySelector('title')

  test("The background should match", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let body = document.querySelector("body");
    let styles = window.getComputedStyle(body);
    expect(styles["background"]).toBe(
      `url(../../.learn/assets/background-vertical.jpg?raw=true) repeat-y`
    );
  });
  test("The font-family should be 'Times New Roman'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let body = document.querySelector("body");
    let styles = window.getComputedStyle(body);
    expect(styles["font-family"].toLowerCase()).toBe("\"times new roman\"");
  });
  test("The padding-left should be '20px'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let body = document.querySelector("body");
    let styles = window.getComputedStyle(body);
    expect(styles["padding-left"]).toBe("20px");
  });
  test("The font-family in the <h1> tag should be 'Courier'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let h1Tag = document.querySelector("h1");
    let h1TagStyles = window.getComputedStyle(h1Tag);
    // get computed styles of any element you like
    expect(h1TagStyles["font-family"].toLowerCase()).toBe("\"courier\"");
  });
  test("The color in the <h1> tag should be 'red'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let h1Tag = document.querySelector("h1");
    let h1TagStyles = window.getComputedStyle(h1Tag);
    // get computed styles of any element you like
    expect(h1TagStyles["color"]).toBe("red");
  });
  test("The text-decoration in the <h2> tag should be 'underline'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    // get computed styles of any element you like
    const h2Tag = document.querySelector("h2");
    let h2TagStyles = window.getComputedStyle(h2Tag);
    expect(h2TagStyles["text-decoration"]).toBe("underline");
  });
  test("The padding in the p tag should be '5px'", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    // get computed styles of any element you like
    const idTag = document.querySelector("#id1");
    let idTagStyles = window.getComputedStyle(idTag);
    expect(idTagStyles["padding"]).toBe("5px");
  });

  test("The a:hover underline should be removed", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules;
    let orangeHoverSelector = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === "a:hover") {
        orangeHoverSelector = cssArray[i].style['text-decoration'];
      }
    }
    expect(orangeHoverSelector).toBe("none");
  });

  test("The a:hover color should be green", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules;
    let orangeHoverSelector = "";

    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === "a:hover") {
        orangeHoverSelector = cssArray[i].style.color;
      }
    }
    expect(orangeHoverSelector).toBe('green');
  });
  test("You should not change the existing <head> tag elements", () => {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    expect(meta).toBeTruthy()

    let pathname = link.getAttribute("href")
    expect(pathname).toBe('./styles.css')

    expect(title).toBeTruthy()
  })

});
