
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");


jest.dontMock("fs");

describe("The Table tag should contain inline style background: green", function() {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head');
    let meta = head.querySelector("meta")
    let title = head.querySelector('title').innerHTML
    
    expect(meta).toBe(null)
    expect(title).toBe('03 Inline Styles')

  })

  it("The background should be green", function() {
    const table = document.querySelector("table");
    // expect(table.style.background === "green").toBeTruthy();
    var styles = window.getComputedStyle(table);
    expect(styles["background"]).toBe("green");
  });
});
