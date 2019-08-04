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

// describe("The Table tag should contain inline style background:green", function() {
//   beforeEach(() => {
//     //here I import the HTML into the document
//     document.documentElement.innerHTML = html.toString();
//     document.querySelector(
//       "head"
//     ).innerHTML = `<style>${css.toString()}</style>`;
//   });
//   afterEach(() => {
//     jest.resetModules();
//   });

//   // it("the html code should contain a table tag", function() {
//   // we can read from the source code
//   // console.log("HTML: " + html.toString());
//   // console.log("CSS " + css.toString());
//   // expect(css.toString().toBeFalsy());
//   // expect(html.toString().indexOf(`table`)).toBeTruthy();

//   //or use query selector to compare hoy mane scriptags do we have
//   // const pTags = document.querySelectorAll("p");
//   // expect(pTags.length).toBe(1);
//   // });
//   it("the background should be green", function() {

//     const table = document.querySelector("table");
//     expect(css.toString().toBeFalsy());
//     expect(table.style.background === "green").toBeTruthy();
//     // expect(table.contains("styles"));
//     // var styles = window.getComputedStyle("table");
//     // console.log("Styles: " + styles);
//     // expect(styles["background"]).toBe("green");
//     // console.log("Styles: " + table);
//   });
// });
