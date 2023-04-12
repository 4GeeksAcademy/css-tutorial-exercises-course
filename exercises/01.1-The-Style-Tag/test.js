const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

const p = document.querySelector("p");

test("There should be a <p> tag", ()=>{
    expect(p).toBeTruthy();
})

test("The <p> tag color should be blue", ()=>{
    let styles = window.getComputedStyle(p);
    expect(styles["color"]).toBe("blue");
});

test("The <p> tag should not contain any inline style", ()=>{
    let emptyBodyInlineStyle = {};
    expect(p.style._values).toEqual(emptyBodyInlineStyle);
});
