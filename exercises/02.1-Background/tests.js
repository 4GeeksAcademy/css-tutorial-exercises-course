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


  it("The body tag should not contain any inline style", function () {
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
  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head');
    let meta = head.querySelector("meta")
    let link = head.querySelector('link').href
    let title = head.querySelector('title').innerHTML
    
    expect(meta).toBe(null)
    expect(link).toBe('http://localhost/styles.css')
    expect(title).toBe('02 Background')
  })
});
