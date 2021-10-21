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

  // it("The styles.css file should be empty", function () {
  //   console.log(css);
  //   expect(css.toString()==="").toBeTruthy();
  // });
  // it("The Head tag should includes a Style tag", function () {
  //   expect(html.toString().indexOf(`<style`)>-1).toBeTruthy();
  // });
  it("The body tag should not contains any inline style", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let bodyInlineStyle=document.getElementsByTagName("style");
    let emptyBodyInlineStyle={};
    expect(bodyInlineStyle[0].style._values).toEqual(emptyBodyInlineStyle);
    console.log("sty: ", bodyInlineStyle[0]);
  });
  it("the width should be '50px'", function () {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;

    let cssArray=document.styleSheets[0].cssRules;
    // console.log("$$$:", cssArray)
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".myBox") {
        orangeHoverSelector=cssArray[i].style.width;
      }
    }
    expect(orangeHoverSelector).toBe('50px');

  });
  it("the height should be '50px'", function () {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;

    let cssArray=document.styleSheets[0].cssRules;
    // console.log("$$$:", cssArray)
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".myBox") {
        orangeHoverSelector=cssArray[i].style.height;
      }
    }
    expect(orangeHoverSelector).toBe('50px');

  });
  // it("the background should be in rgb code rgb(189, 189, 189)", function() {
  //   // get computed styles of any element you like
  //   const body = document.querySelector(".myBox");
  //   var styles = window.getComputedStyle(body);
  //   expect(styles["background"]).toBe("rgb(189, 189, 189)");
  // });

  // it("the padding-top should be deleted", function () {
  //   // get computed styles of any element you like
  //   const body=document.querySelector(".myBox");
  //   var styles=window.getComputedStyle(body);
  //   expect(styles["padding-top"]).toBeFalsy();
  //   expect(styles["padding-bottom"]).toBeFalsy();
  //   expect(styles["padding-right"]).toBeFalsy();
  //   expect(styles["padding-left"]).toBeFalsy();

  // });

  it("the background-size should be contain", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;

    let cssArray=document.styleSheets[0].cssRules;
    // console.log("$$$:", cssArray)
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".myBox") {
        orangeHoverSelector=cssArray[i].style['background-size'];
      }
    }
    expect(orangeHoverSelector).toBe('contain');
  });
  it("the background should include the shorthand property", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;

    let cssArray=document.styleSheets[0].cssRules;
    console.log("$$$:", cssArray)
    let orangeHoverSelector="";
    let backImg = "";
    let backColor = "";
    let backPos = "";
    let backRepeat = "";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".myBox") {
        orangeHoverSelector=cssArray[i].style.background;
        backImg=cssArray[i].style['background-image'];
        backColor=cssArray[i].style['background-color'];
        backPos=cssArray[i].style['background-position-x'];
        backRepeat=cssArray[i].style['background-repeat'];
      }
    }
    expect(backColor).toBeFalsy();
    expect(backImg).toBeFalsy();
    expect(backPos).toBeFalsy();
    expect(backRepeat).toBeFalsy();
    expect(orangeHoverSelector).toContain('rgb(189, 189, 189)');
    expect(orangeHoverSelector).toContain('no-repeat');
    expect(orangeHoverSelector).toContain('100px');
    expect(orangeHoverSelector).toContain('url(https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/3a2d1dd03f58167a5a4894155af2d3aa4d41d647/.learn/assets/baby.jpg?raw=true)');
  });

  it("the padding should include the shorthand property in the right order (top, right, bottom, left)", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;

    let cssArray=document.styleSheets[0].cssRules;
    // console.log("$$$:", cssArray)
    let orangeHoverSelector="";
    let padTop= "";
    let padRight= "";
    let padBottom= "";
    let padLeft= "";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".myBox") {
        orangeHoverSelector=cssArray[i].style.padding;
        padTop=cssArray[i].style['padding-top']
        padRight=cssArray[i].style['padding-right']
        padBottom=cssArray[i].style['padding-bottom']
        padLeft=cssArray[i].style['padding-left']
      }
    }
    expect(orangeHoverSelector).toBe('10px 190px 50px 30px');
    expect(padTop).toBeFalsy();
    expect(padRight).toBeFalsy();
    expect(padBottom).toBeFalsy();
    expect(padLeft).toBeFalsy();
  });
  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()
    
    let meta = head.querySelector("meta")
    expect(meta).toBe(null)
    
    const pathname = new URL(document.querySelector('link').href).pathname
    expect(pathname).toBe('/styles.css')
    
    let title = head.querySelector('title')
    expect(title).not.toBe(null)
  })
});
