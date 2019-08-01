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

  it("the background-size should be 'contain'", function() {
    // get computed styles of any element you like
    const body = document.querySelector("table");
    var styles = window.getComputedStyle(body);
    expect(styles["background-size"]).toBe("contain");
  });

  it("the background-repeat should be 'no-repeat'", function() {
    // get computed styles of any element you like
    const body = document.querySelector("body");
    var styles = window.getComputedStyle(body);

    expect(styles["background-repeat"]).toBe("inherit");
  });
});
