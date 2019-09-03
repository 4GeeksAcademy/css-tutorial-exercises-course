const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function () {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML=html.toString();

  });
  afterEach(() => {
    jest.resetModules();
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
  it("You should not delete or edit the existing code", function () {

    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules[0].selectorText;
    // console.log("cssArray:",cssArray)
    let cssArrayBackground= document.styleSheets[0].cssRules[0].style.background
    console.log("back:",cssArrayBackground)
    let thirdItSelector=document.styleSheets[0].cssRules[1].selectorText;
    let thirdItBackground = document.styleSheets[0].cssRules[1].style.background
    expect(thirdItSelector).toBe("#thirditem");
    expect(thirdItBackground).toBe("yellow");
    expect(cssArray).toBe("ul li");
    expect(cssArrayBackground).toBe("blue");
  })
  it("You should use a more specific rule using the !important annotation ", function () {

    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules;
    // console.log("NEW", cssArray[2].style._importants)
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText==="#thirditem"&&cssArray[i].style._importants.background==="important") {
        orangeHoverSelector=cssArray[i].style.background;
      }
    }

    expect(orangeHoverSelector).toBe("green");
  });

});