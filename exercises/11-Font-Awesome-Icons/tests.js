const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

let cssArray = null;

describe("All the styles should be applied", ()=>{
  const icons = document.querySelectorAll("i");
  test("ul tag should exists", ()=>{
    expect(document.querySelector("ul")).toBeTruthy();
  });
  test("At least 3 li tags should exist", ()=>{
    expect(document.querySelectorAll("li").length).toBe(3);
  });
  test("At least 3 i tags should exist", ()=>{
    expect(document.querySelectorAll("i").length).toBe(3);
  });
  test(" LI innerHTML exist", ()=>{
    expect(document.querySelector("li")).toBeTruthy();
    const li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      expect(li[i].innerHTML).toBeTruthy();
    }
  });
  test('the i tag should have a class "fas"', ()=>{
    //or use query selector to compare hoy mane scriptags do we have
    expect(icons).toBeTruthy();
    
    icons.forEach(icon=>{
      let hasFas = icon.classList.contains("fas")
      expect(hasFas).toBe(true);
    })
  });
});
