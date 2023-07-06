const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

describe("All the styles should be applied", ()=>{
  const meta = document.querySelector("meta")
  const title = document.querySelector('title')
  const link = document.querySelector('link')
  
  test("The ul li color has to be red using !important", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let color = ""

    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === "ul li" || cssArray[i].selectorText === "ul > li") {
        color = cssArray[i].cssText;
      }
    }
    let reg = new RegExp(/color:\s*red\s*!important\s*;/gm)

    expect(reg.test(color.toLowerCase())).toBeTruthy();
  });

  test("The ol second element background should be green", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules;

    let background = "";
    let backgroundColor="";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === "ol li:nth-child(2)" || cssArray[i].selectorText === "ol > li:nth-child(2)") {
        background = cssArray[i].style['background'];
        backgroundColor = cssArray[i].style['background-color'];

      }

      if(background){
        background = background.toLowerCase()
      }

      if(backgroundColor){
        backgroundColor = backgroundColor.toLowerCase()
      }

    } expect((background && background === 'green') || (backgroundColor && backgroundColor === 'green')).toBeTruthy();
  })

  test("The odd rows of the table should have yellow background", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules;

    let background = "";
    let backgroundColor = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText.includes( "tr:nth-child(odd)")) {
        background = cssArray[i].style['background'];
        backgroundColor = cssArray[i].style['background-color'];
        
      }

    } expect((background && background.toLowerCase() === "yellow") || (backgroundColor && backgroundColor.toLowerCase() === "yellow")).toBeTruthy();
  })

  test("Write all your rules above the existing code", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssBody = document.styleSheets[0].cssRules[3].selectorText;
    let cssArray = document.styleSheets[0].cssRules[4].selectorText;
    expect(cssArray).toBe("ul li,\nol li");
    expect(cssBody).toBe("body");
  })

  test("You should not change the existing head tag elements", ()=>{
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    expect(meta).toBeTruthy()

    let href = link.getAttribute('href')
    expect(href).toBe('./styles.css')

    expect(title).toBeTruthy()
  })

});
