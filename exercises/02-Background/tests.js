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
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;


  });
  afterEach(() => {
    jest.resetModules();
  });
  it("The body tag should not contains any inline style", function () {
    let bodyInlineStyle=document.getElementsByTagName("body");
    let emptyBodyInlineStyle={};
    expect(bodyInlineStyle[0].style._values).toEqual(emptyBodyInlineStyle);
    // expect(bodyInlineStyle[0].style._values.background - repeat).toBe(
    //   undefined
    // );

    console.log(bodyInlineStyle[0].style._values);
  });
  it("The Head tag should not includes a Style tag", function () {
    expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();
  });
  it("the background-size should be 'contain'", function () {
    // get computed styles of any element you like
    const body=document.querySelector("body");
    let styles=window.getComputedStyle(body);
    expect(styles["background-size"]).toBe("contain");
  });

  it("the background-repeat should be 'no-repeat'", function () {

    const body=document.querySelector("body");
    let styles=window.getComputedStyle(body);
    expect(styles["background-repeat"]).toBe("inherit");
  });
});
