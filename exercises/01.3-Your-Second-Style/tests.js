const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
// const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function() {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("The background should be blue", function() {
    const body = document.querySelector("body");
    var styles = window.getComputedStyle(body);
    expect(styles["background"]).toBe("blue");
  });
  it("The body tag should not contains any inline style", function() {
    let bodyInlineStyle = document.getElementsByTagName("body");
    let emptyBodyInlineStyle = {};
    expect(bodyInlineStyle[0].style._values).toEqual(emptyBodyInlineStyle);
    // console.log(bodyInlineStyle[0].style._values.background);
  });
  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()
    let meta = head.querySelector("meta")
    expect(meta).toBe(null)
  })
});
