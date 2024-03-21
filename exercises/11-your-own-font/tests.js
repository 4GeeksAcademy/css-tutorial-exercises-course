const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

let cssArray = null;

describe("All the styles should be applied", ()=>{
  const link = document.querySelectorAll("link")
  test("the font-family in the .myTitle should exists", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    // get computed styles of any element you like
    let cssArray = document.styleSheets[0].cssRules;
    let orangeHoverSelector = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".myTitle") {
        orangeHoverSelector = cssArray[i].style['font-family'];
      }
    }

    expect(orangeHoverSelector).toBeTruthy();
  });
  test('The h1 tag should have a class "myTitle"', ()=>{
    //or use query selector to compare hoy mane scriptags do we have
    const h = document.querySelector("h1");
    expect(h.classList.contains("myTitle")).toBeTruthy();
  });
  test("The google-font link should be included in the head tag", ()=>{
    // let headContent=document.getElementsByTagName("*")
    expect(link.length).toBeGreaterThanOrEqual(2);
  });


  test("The head tag should not include a style tag", ()=>{
    expect(html.toString().indexOf(`<style`) > -1).toBeFalsy();
  });
});


