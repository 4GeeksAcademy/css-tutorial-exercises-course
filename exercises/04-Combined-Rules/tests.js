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
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("The styles.css file should be empty", function() {
    console.log(css);
    expect(css.toString() === "").toBeTruthy();
  });

  it("The Padding - Shorthand Property should be applied ", function() {
    let styles = document.querySelector("head").innerHTML;
    console.log("Styles :" + styles);
    // get computed styles of any element you like
    // const body = document.querySelector('body');
    // var styles = window.getComputedStyle(body);
    expect(styles["background-color"]).toBe("blue");
  });
});
