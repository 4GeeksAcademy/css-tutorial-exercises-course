const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
let divTag=null
let classTagStyles=null
jest.dontMock("fs");



describe("All the styles should be applied", function () {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML=html.toString();
    // let classTagStyles = window.getComputedStyle(
    //   document.querySelector(".orange-btn")
    // );
    //apply the styles from the stylesheet if needed
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    divTag=document.querySelector(".orange-btn");
    classTagStyles=window.getComputedStyle(divTag);
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("the  padding  should be '10px'", function () {

    expect(classTagStyles["padding"]).toBe("10px");
  });
  it("the  border radius should be '4px'", function () {

    expect(classTagStyles["border-radius"]).toBe("4px");
  });
  it("the  border should be '1px solid #ffffff;'", function () {

    expect(classTagStyles["border"]).toBe("1px solid #ffffff");
  });
  it("the  background should be 'rgb(255, 153, 51)'", function () {

    expect(classTagStyles["background"]).toBe("rgb(255, 153, 51)");
  });
  it("the  underline should to be removed", function () {

    expect(classTagStyles["text-decoration"]).toBe("none");
  });
  it("The Mouse hover property should be blue", function () {
    // get computed styles of any element you like
    let cssArray=document.styleSheets[0].cssRules;
    console.log("***", cssArray)
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".orange-btn:hover") {
        orangeHoverSelector=cssArray[i].style.background;
      }
    }

    expect(orangeHoverSelector).toBe("#cc7a00");
  });

  it("You should be careful the specifity", function () {
    let cssArray=document.styleSheets[0].cssRules[0].selectorText;
    expect(cssArray).toBe(".orange-btn");
  }
  )


});
