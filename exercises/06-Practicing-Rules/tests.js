const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function () {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML=html.toString();

    // apply the styles from the stylesheet if needed

  });
  afterEach(() => {
    jest.resetModules();
  });



  it("the background should match", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let body=document.querySelector("body");
    let styles=window.getComputedStyle(body);
    expect(styles["background"]).toBe(
      `url(../../.learn/assets/background-vertical.jpg?raw=true) repeat-y`
    );
  });
  it("the font-family should be 'Times New Roman'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let body=document.querySelector("body");
    let styles=window.getComputedStyle(body);
    expect(styles["font-family"]).toBe("Times New Roman");
  });
  it("the padding-left should be '20px'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let body=document.querySelector("body");
    let styles=window.getComputedStyle(body);
    expect(styles["padding-left"]).toBe("20px");
  });
  it("the font-family in the H1 Tag should be 'Courier'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let h1Tag=document.querySelector("h1");
    let h1TagStyles=window.getComputedStyle(h1Tag);
    // get computed styles of any element you like
    expect(h1TagStyles["font-family"]).toBe("Courier");
  });
  it("the color in the H1 Tag should be 'red'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let h1Tag=document.querySelector("h1");
    let h1TagStyles=window.getComputedStyle(h1Tag);
    // get computed styles of any element you like
    expect(h1TagStyles["color"]).toBe("red");
  });
  it("the text-align in the H1 Tag should be 'center'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let h1Tag=document.querySelector("h1");
    let h1TagStyles=window.getComputedStyle(h1Tag);
    // get computed styles of any element you like
    expect(h1TagStyles["text-align"]).toBe("center");
  });
  it("the text-decoration in the H2 Tag should be 'underline'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    // get computed styles of any element you like
    const h2Tag=document.querySelector("h2");
    let h2TagStyles=window.getComputedStyle(h2Tag);
    expect(h2TagStyles["text-decoration"]).toBe("underline");
  });
  it("the padding in the #id1 Tag should be '5px'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    // get computed styles of any element you like
    const idTag=document.querySelector("#id1");
    let idTagStyles=window.getComputedStyle(idTag);
    expect(idTagStyles["padding"]).toBe("5px");
  });
  it("the background-color in the #id1 Tag should be 'semi transparent white'", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    // get computed styles of any element you like
    const idTag=document.querySelector("#id1");
    let idTagStyles=window.getComputedStyle(idTag);
    console.log("$$$:", idTagStyles)
    expect(idTagStyles["background-color"]).toBe("rgba(255, 255, 255, 0.2)");
  });
  it("The a hover underline should be removed", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules;
    // console.log("$$$:", cssArray)
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText==="a:hover") {
        orangeHoverSelector=cssArray[i].style['text-decoration'];
        console.log("$$$:", orangeHoverSelector)
      }
    }
    expect(orangeHoverSelector).toBe("none");
  });

  it("The a hover color should be green", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;

    let cssArray=document.styleSheets[0].cssRules;
    console.log("$$$:", cssArray[0])
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText==="a:hover") {
        orangeHoverSelector=cssArray[i].style.color;
      }
    }
    expect(orangeHoverSelector).toBe('green');
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

});
