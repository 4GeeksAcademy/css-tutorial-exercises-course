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

  test("The <img> tag has to be removed", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    expect(document.querySelector("img")).toBeFalsy();
  });
  test("The <div> tag should exists", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    expect(document.querySelector("div")).toBeTruthy();
  });
  test("the width in the div Tag should be '200px'", () => {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["width"]).toBe("200px");
  });
  test("the height in the div Tag should be '200px'", () => {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["height"]).toBe("200px");
  });
  test("the  border radius in the div Tag should be '100%'", () => {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["border-radius"]).toBe("100%");
  });
  test("the  background position x  in the div Tag should be 'center'", () => {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["background-position-x"]).toBe("center");
  });
  test("the  background position y  in the div Tag should be 'center'", () => {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["background-position-y"]).toBe("center");
  });
  test("the  background image in the div Tag should exists", () => {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["background-image"]).toBeTruthy();
  });
  test("You should not change the existing head tag elements", ()=>{
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    expect(meta).toBeTruthy()

    let href = link.getAttribute('href')
    expect(href).toBe('./styles.css')

    expect(title).toBeTruthy()
  })
});
