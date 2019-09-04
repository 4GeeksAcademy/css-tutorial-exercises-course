const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
let cssArray=null;
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

  it("You should not add your rules above the existing code", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules[0].selectorText;
    expect(cssArray).toBe(".threeDimension");
  })

  it("the 'a' tag in the index.html should not be deleted", function () {
    // we can read from the source code
    // console.log(html.toString());
    expect(html.toString().indexOf(`<a`)>-1).toBeTruthy();
  });


  it("The border-color rule for the 'threeDimension active ' property should match the instruction color", function () {
    // get computed styles of any element you like
    // let cssArray=document.styleSheets[0].cssRules;
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules;

    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText==="a.threeDimension:active") {
        orangeHoverSelector=cssArray[i].style['border-color'];
      }
    }

    expect(orangeHoverSelector).toBe("#000 #aaa #aaa #000");
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


