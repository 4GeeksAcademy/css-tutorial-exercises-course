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
  test("the  padding  should be '10px'", ()=>{
    document.querySelector(
      "head"

    ).innerHTML = `<style>${css.toString()}</style>`;
    let divTag = document.querySelector(".orange-btn");
    let classTagStyles = window.getComputedStyle(divTag);

    expect(classTagStyles["padding"]).toBe("10px");
  });
  test("the  border radius should be '4px'", ()=>{
    document.querySelector(
      "head"

    ).innerHTML = `<style>${css.toString()}</style>`;
    let divTag = document.querySelector(".orange-btn");
    let classTagStyles = window.getComputedStyle(divTag);
    expect(classTagStyles["border-radius"]).toBe("4px");
  });
  test("the  background should be 'orange'", ()=>{
    document.querySelector(
      "head"

    ).innerHTML = `<style>${css.toString()}</style>`;
    let divTag = document.querySelector(".orange-btn");
    let classTagStyles = window.getComputedStyle(divTag);
    expect(classTagStyles["background"]).toBe("orange");
  });
  test("the  underline should to be removed", ()=>{
    document.querySelector(
      "head"

    ).innerHTML = `<style>${css.toString()}</style>`;
    let divTag = document.querySelector(".orange-btn");
    let classTagStyles = window.getComputedStyle(divTag);
    expect(classTagStyles["text-decoration"]).toBe("none");
  });
  test("The mouse hover property should be 'darkorange'", ()=>{
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules;

    let orangeHoverSelector = "";
    for (let i = 0; i < cssArray.length; i++) {
      if (cssArray[i].selectorText === ".orange-btn:hover") {
        orangeHoverSelector = cssArray[i].style.background;
      }
    }

    expect(orangeHoverSelector).toBe("darkorange");
  });

  test("You should be careful with the specifity", ()=>{
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let cssArray = document.styleSheets[0].cssRules[0].selectorText;
    expect(cssArray).toBe(".orange-btn");
  }
  )
  test("You should not change the existing head tag elements", ()=>{
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    expect(meta).toBeTruthy()

    let href = link.getAttribute('href')
    expect(href).toBe('./styles.css')

    expect(title).toBeTruthy()
  })

});
