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
  test("The padding should be '10px'", ()=>{
    document.querySelector(
      "head"

    ).innerHTML = `<style>${css.toString()}</style>`;
    let divTag = document.querySelector(".orange-btn");
    let classTagStyles = window.getComputedStyle(divTag);

    expect(classTagStyles["padding"]).toBe("10px");
  });
  test("The border-radius should be '4px'", ()=>{
    document.querySelector(
      "head"

    ).innerHTML = `<style>${css.toString()}</style>`;
    let divTag = document.querySelector(".orange-btn");
    let classTagStyles = window.getComputedStyle(divTag);
    expect(classTagStyles["border-radius"]).toBe("4px");
  });
  test("The underline should be removed", ()=>{
    document.querySelector(
      "head"

    ).innerHTML = `<style>${css.toString()}</style>`;
    let divTag = document.querySelector(".orange-btn");
    let classTagStyles = window.getComputedStyle(divTag);
    expect(classTagStyles["text-decoration"]).toBe("none");
  });

  test("You should be careful with the specificity", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules[0].selectorText;
    expect(cssArray).toBe(".orange-btn");
  }
  )
  test("You should not change the existing <head> tag elements", ()=>{
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    expect(meta).toBeTruthy()

    let href = link.getAttribute('href')
    expect(href).toBe('./styles.css')

    expect(title).toBeTruthy()
  })

});
