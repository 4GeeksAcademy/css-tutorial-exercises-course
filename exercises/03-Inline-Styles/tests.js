const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("The Table tag should contain inline style background: green", function() {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();
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

  it("The background should be green", function() {
    const table = document.querySelector("table");
    expect(table.style.background === "green").toBeTruthy();
  });
});


