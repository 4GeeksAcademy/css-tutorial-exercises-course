const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock("fs");

describe("The Table tag should contain inline style background: green",  ()=>{

  test("You should not change the existing head tag elements",  ()=>{
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    let meta = head.querySelector("meta")
    expect(meta).toBe(null)

    let title = head.querySelector('title').innerHTML
    expect(title).toBe('03 Inline Styles')
  })

  test("The background should be green",  ()=>{
    const table = document.querySelector("table");
    // expect(table.style.background === "green").toBeTruthy();
    var styles = window.getComputedStyle(table);
    expect(styles["background"]).toBe("green");
  });
});
