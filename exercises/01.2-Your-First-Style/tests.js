const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

describe("All the styles should be applied", ()=>{
  const a = document.querySelector("a");

  test("The anchor tag should be yellow", ()=>{
    let styles = window.getComputedStyle(a);
    expect(styles["color"]).toBe("yellow");
  });

  test("The <body> tag should not contain any inline style", ()=>{
    let bodyInlineStyle = document.getElementsByTagName("body");
    let emptyBodyInlineStyle = {};
    expect(bodyInlineStyle[0].style._values).toEqual(emptyBodyInlineStyle);
  });

  test("The anchor tag should not contain any inline style", ()=>{
    let emptyBodyInlineStyle = {};
    expect(a.style._values).toEqual(emptyBodyInlineStyle);
  });
  
  test("You should not change the existing <head> tag elements",  ()=>{
    let head = document.querySelector('head')
    expect(head).toBeTruthy()
    
    let meta = head.querySelector("meta")
    expect(meta).toBe(null)
  })
});
