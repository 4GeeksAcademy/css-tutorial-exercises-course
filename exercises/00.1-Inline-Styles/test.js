const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');
const index = document.querySelector("html");
const h1 = document.querySelector('h1');

test("index.html should have the correct structure and style", () => {
  expect(document.querySelector('html')).toBeTruthy();
  expect(document.querySelector('head')).toBeTruthy();
  expect(document.querySelector('body')).toBeTruthy();
  expect(document.querySelector('h1')).toBeTruthy();
});

test("The h1 tag should contain inline style", () => {
  let inlineStyles = { color: "orangered", border: "1px solid black" };
  expect(h1.style.color).toBe(inlineStyles.color);
  expect(h1.style.border).toBe(inlineStyles.border);
});
