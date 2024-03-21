const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock("fs");

describe("All the styles should be applied", ()=>{
  const body = document.querySelector("body");
  const link = document.querySelector("link");
  const title = document.querySelector('title');
  
  test("The <body> tag should not contain any inline style", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let emptyBodyInlineStyle = {};
    expect(body.style._values).toEqual(emptyBodyInlineStyle);
  });

  test("the background-size should be 'contain' without quotes", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    // get computed styles of any element you like
    let styles = window.getComputedStyle(body);
    expect(styles["background-size"]).toBe("contain");
  });

  test("the background-repeat should be 'repeat' without quotes", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let styles = window.getComputedStyle(body);
    expect(styles["background-repeat"]).toBe("repeat");
  });
  
  test("You should not change the existing <head> tag elements", ()=>{
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    let meta = head.querySelector("meta")
    expect(meta).toBe(null)

    const href = link.getAttribute("href")
    expect(href).toBe('./styles.css')

    let titleInner = title.innerHTML
    expect(titleInner).toBe('03.1 Background')
  })
});
