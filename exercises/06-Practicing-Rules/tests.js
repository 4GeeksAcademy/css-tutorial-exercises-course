const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function() {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();

    // apply the styles from the stylesheet if needed
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("The Head tag should not includes a Style tag", function() {
    expect(html.toString().indexOf(`<style`) > -1).toBeFalsy();
  });

  it("the background should match", function() {
    // get computed styles of any element you like
    const body = document.querySelector("body");
    var styles = window.getComputedStyle(body);
    expect(styles["background"]).toBe(
      `url(http://assets.breatheco.de/apis/img/bg/background-vertical.jpg) repeat-y`
    );
  });
  it("the font-family should be 'Times New Roman'", function() {
    // get computed styles of any element you like
    const body = document.querySelector("body");
    var styles = window.getComputedStyle(body);
    expect(styles["font-family"]).toBe("Times New Roman");
  });
  it("the padding-left should be '20px'", function() {
    // get computed styles of any element you like
    const body = document.querySelector("body");
    var styles = window.getComputedStyle(body);
    expect(styles["padding-left"]).toBe("20px");
  });
  it("the font-family in the H1 Tag should be 'Courier'", function() {
    // get computed styles of any element you like
    const h1Tag = document.querySelector("h1");
    let h1TagStyles = window.getComputedStyle(h1Tag);
    expect(h1TagStyles["font-family"]).toBe("Courier");
  });
  it("the color in the H1 Tag should be 'red'", function() {
    // get computed styles of any element you like
    const h1Tag = document.querySelector("h1");
    let h1TagStyles = window.getComputedStyle(h1Tag);
    expect(h1TagStyles["color"]).toBe("red");
  });
  it("the text-align in the H1 Tag should be 'center'", function() {
    // get computed styles of any element you like
    const h1Tag = document.querySelector("h1");
    let h1TagStyles = window.getComputedStyle(h1Tag);
    expect(h1TagStyles["text-align"]).toBe("center");
  });
  it("the text-decoration in the H2 Tag should be 'underline'", function() {
    // get computed styles of any element you like
    const h2Tag = document.querySelector("h2");
    let h2TagStyles = window.getComputedStyle(h2Tag);
    expect(h2TagStyles["text-decoration"]).toBe("underline");
  });
  it("the padding in the #id1 Tag should be '5px'", function() {
    // get computed styles of any element you like
    const idTag = document.querySelector("#id1");
    let idTagStyles = window.getComputedStyle(idTag);
    expect(idTagStyles["padding"]).toBe("5px");
  });
  it("the background-color in the #id1 Tag should be 'semi transparent white'", function() {
    // get computed styles of any element you like
    const idTag = document.querySelector("#id1");
    let idTagStyles = window.getComputedStyle(idTag);
    expect(idTagStyles["background-color"]).toBe("rgba(255, 255, 255, 0.2)");
  });
});
