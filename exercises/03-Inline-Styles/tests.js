const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the html should match", function() {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("the html code should contain a table tag", function() {
    // we can read from the source code
    console.log(html.toString());
    expect(html.toString().indexOf(`table`)).toBeTruthy();

    //or use query selector to compare hoy mane scriptags do we have
    // const pTags = document.querySelectorAll("p");
    // expect(pTags.length).toBe(1);
  });
  it("the background should be green", function() {
    // get computed styles of any element you like
    const body = document.querySelector("body");
    var styles = window.getComputedStyle(body);
    expect(styles["background"]).toBe("green");
  });
});
