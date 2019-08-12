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
    // ).innerHTML=`<style>${css.toString()}</style>`;
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("the  font-family in the #myTitle should exists", function () {
    // get computed styles of any element you like
    let cssArray=document.styleSheets[0].cssRules;
    // console.log("%%% ", cssArray)
    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".myTitle") {
        // console.log("%%% ", cssArray[i].selectorText)
        orangeHoverSelector=cssArray[i].style['font-family'];
      }
    }

    expect(orangeHoverSelector).toBeTruthy();
  });
  it('the h1 tag should have a class "myTitle"', function () {
    //or use query selector to compare hoy mane scriptags do we have
    const h=document.querySelector("h1");
    expect(h.classList.contains("myTitle")).toBeTruthy();
  });
  it("The link should be included in the head tag", function () {
    // let headContent=document.getElementsByTagName("*")
    // console.log("###", headContent[1].innerHTML)
    console.log("###", document.head.childNodes)
    expect(document.querySelectorAll("link").length).toBe(2);
  });


  it("The Head tag should not includes a Style tag", function () {
    expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();
  });
});


