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

 it("You should not change the head tag", function () {
    let title = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<title")
    expect(title).not.toBe(-1)
    expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();
  })

  it("The background should be green", function() {
    const table = document.querySelector("table");
    // expect(table.style.background === "green").toBeTruthy();
    var styles = window.getComputedStyle(table);
    expect(styles["background"]).toBe("green");
  });
});
