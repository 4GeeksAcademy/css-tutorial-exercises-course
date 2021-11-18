const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function() {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();

    //apply the styles from the stylesheet if needed

  });
  afterEach(() => {
    jest.resetModules();
  });

  it("The <img> tag has to be removed", function() {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    expect(document.querySelector("img")).toBeFalsy();
  });
  it("The <div> tag should exists", function() {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    expect(document.querySelector("div")).toBeTruthy();
  });
  it("the width in the div Tag should be '200px'", function() {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["width"]).toBe("200px");
  });
  it("the height in the div Tag should be '200px'", function() {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["height"]).toBe("200px");
  });
  it("the  border radius in the div Tag should be '100%'", function() {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["border-radius"]).toBe("100%");
  });
  it("the  background position x  in the div Tag should be 'center'", function() {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["background-position-x"]).toBe("center");
  });
  it("the  background position y  in the div Tag should be 'center'", function() {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["background-position-y"]).toBe("center");
  });
  it("the  background image in the div Tag should exists", function() {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    const divTag = document.querySelector("div");
    let idTagStyles = window.getComputedStyle(divTag);
    expect(idTagStyles["background-image"]).toBeTruthy();
  });
  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()
    
    let meta = head.querySelector("meta")
    expect(meta).not.toBe(null)
    
    const pathname = new URL(document.querySelector('link').href).pathname
    expect(pathname).toBe('/styles.css')
    
    let title = head.querySelector('title')
    expect(title).not.toBe(null)
  })
});
