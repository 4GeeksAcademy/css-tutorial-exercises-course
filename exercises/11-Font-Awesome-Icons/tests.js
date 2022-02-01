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

  it("ul tag should exists", function() {
    expect(document.querySelector("ul")).toBeTruthy();
  });
  it("At least 3 li tags should exist", function() {
    expect(document.querySelectorAll("li").length).toBe(3);
  });
  it("At least 3 i tags should exist", function() {
    expect(document.querySelectorAll("i").length).toBe(3);
  });
  it(" LI innerHTML exist", function() {
    const li = document.querySelectorAll("li");
    expect(document.querySelector("li")).toBeTruthy();
    for (let i = 0; i < li.length; i++) {
      expect(li[i].innerHTML).toBeTruthy();
    }
  });
  it('the i tag should have a class "fas"', function() {
    //or use query selector to compare hoy mane scriptags do we have
    const icon = document.querySelectorAll("i");
    expect(document.querySelector("i")).toBeTruthy();
    for (let i = 0; i < icon.length; i++) {
      expect(icon[i].classList.contains("fa")).toBeTruthy();
    }
  });
});
