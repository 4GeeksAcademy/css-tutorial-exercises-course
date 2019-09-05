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


  it("The ul li color has to be red", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules;

    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {

      if (cssArray[i].selectorText==="ul li") {
        orangeHoverSelector=cssArray[i].style.color;

      }
      expect(orangeHoverSelector).toBe("red");
    }


  });
  it("The ul second element background should be green", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules;

    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText==="ol li:nth-child(2)") {
        orangeHoverSelector=cssArray[i].style['background-color'];

      }

    }expect(orangeHoverSelector).toBe("green");
  })
  it("The odd rows of the table should have yellow background", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules;

    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText==="tr:nth-child(odd)") {
        orangeHoverSelector=cssArray[i].style['background-color'];

      }

    }expect(orangeHoverSelector).toBe("yellow");
  })

  it("Write all your rules above the existing code", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssBody=document.styleSheets[0].cssRules[3].selectorText;
    let cssArray=document.styleSheets[0].cssRules[4].selectorText;
    expect(cssArray).toBe("ul li,\nol li");
    expect(cssBody).toBe("body");
  }
  )
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