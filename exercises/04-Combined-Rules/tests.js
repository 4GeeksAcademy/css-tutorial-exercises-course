const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function () {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML=html.toString();

    //apply the styles from the stylesheet if needed
    // document.querySelector(
    //   "head"
    // ).innerHTML = `<style>${css.toString()}</style>`;
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("The styles.css file should be empty", function () {
    console.log(css);
    expect(css.toString()==="").toBeTruthy();
  });
  it("The Head tag should includes a Style tag", function () {
    expect(html.toString().indexOf(`<style`)>-1).toBeTruthy();
  });
  it("The body tag should not contains any inline style", function () {
    let bodyInlineStyle=document.getElementsByTagName("style");
    let emptyBodyInlineStyle={};
    expect(bodyInlineStyle[0].style._values).toEqual(emptyBodyInlineStyle);
    console.log("sty: ", bodyInlineStyle[0]);
  });
  it("the width should be '50px'", function () {
    // get computed styles of any element you like
    const body=document.querySelector(".myBox");
    var styles=window.getComputedStyle(body);
    expect(styles["width"]).toBe("50px");
  });
  it("the height should be '50px'", function () {
    // get computed styles of any element you like
    const body=document.querySelector(".myBox");
    var styles=window.getComputedStyle(body);
    expect(styles["height"]).toBe("50px");
  });
  // it("the background should be in rgb code rgb(189, 189, 189)", function() {
  //   // get computed styles of any element you like
  //   const body = document.querySelector(".myBox");
  //   var styles = window.getComputedStyle(body);
  //   expect(styles["background"]).toBe("rgb(189, 189, 189)");
  // });
  it("the background-size should be 'contain'", function () {
    // get computed styles of any element you like
    const body=document.querySelector(".myBox");

    var styles=window.getComputedStyle(body);
    console.log("@@@", styles._values)
    expect(styles["background-size"]).toBe("contain");
  });
  // it("the padding-top should be deleted", function () {
  //   // get computed styles of any element you like
  //   const body=document.querySelector(".myBox");
  //   var styles=window.getComputedStyle(body);
  //   expect(styles["padding-top"]).toBeFalsy();
  //   expect(styles["padding-bottom"]).toBeFalsy();
  //   expect(styles["padding-right"]).toBeFalsy();
  //   expect(styles["padding-left"]).toBeFalsy();

  // });
  it("the padding should include the shorthand property", function () {
    // get computed styles of any element you like
    const body=document.querySelector(".myBox");
    var styles=window.getComputedStyle(body);
    expect(styles["padding"]).toBe("10px 190px 50px 30px");

  });
  it("the background should include the shorthand property ", function () {
    // get computed styles of any element you like
    const body=document.querySelector(".myBox");
    var styles=window.getComputedStyle(body);
    expect(styles["background"]).toBe(
      `rgb(189, 189, 189) url(https://assets.breatheco.de/img/funny/scared-baby.jpg) no-repeat 100px`
    );
  });
});
