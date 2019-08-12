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
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
  });
  afterEach(() => {
    jest.resetModules();
  });
  it("The Head tag should not includes a Style tag", function () {
    expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();
  });



  it("The original code in styles.css should not be deleted", function () {
    const oldCss="ulli{background:blue;}#thirditem{background:yellow;}";
    expect(
      css
        .toString()
        .replace(/\s/g, "")
        .toLowerCase()
    ).toContain(oldCss.toLowerCase());
  });
  it("The styles.css should match exactly", function () {
    const newCss=
      "ulli{background:blue;}#thirditem{background:yellow;}#thirditem{background:green!important;}";
    expect(
      css
        .toString()
        .replace(/\s/g, "")
        .toLowerCase()
    ).toStrictEqual(newCss.toLowerCase());
  });
});
