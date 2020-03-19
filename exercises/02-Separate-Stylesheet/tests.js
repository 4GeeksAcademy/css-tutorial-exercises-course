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



  });
  afterEach(() => {
    jest.resetModules();
  });
  it("The body tag should not contains any inline style", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let bodyInlineStyle=document.getElementsByTagName("body");
    let emptyBodyInlineStyle={};
    expect(bodyInlineStyle[0].style._values).toEqual(emptyBodyInlineStyle);
    // expect(bodyInlineStyle[0].style._values.background - repeat).toBe(
    //   undefined
    // );

    console.log(bodyInlineStyle[0].style._values);
  });

  it("the background-size should be 'contain' without quotes", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    // get computed styles of any element you like
    const body=document.querySelector("body");
    let styles=window.getComputedStyle(body);
    expect(styles["background-size"]).toBe("contain");
  });

  it("the background-repeat should be 'inherit' without quotes", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;

    const body=document.querySelector("body");
    let styles=window.getComputedStyle(body);
    expect(styles["background-repeat"]).toBe("inherit");
  });
  it("You should not change the head tag", function () {

    let meta1 = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta c")
    let meta2 = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta n")
    let link = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<link")
    let title = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<title")
    expect(meta1).not.toBe(-1)
    expect(meta2).not.toBe(-1)
    expect(link).not.toBe(-1)
    expect(title).not.toBe(-1)
    expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();
  })
});
