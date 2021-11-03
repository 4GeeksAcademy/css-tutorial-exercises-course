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


  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()
    
    let meta = head.querySelector("meta")
    expect(meta).not.toBe(null)
    
    const pathname = new URL(document.querySelector('link').href).pathname
    expect(pathname).toBe('/styles.css')
    
    let title = head.querySelector('title')
    expect(title).not.toBe(null)
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