const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

const a = document.querySelector("a");

test("There should be an anchor tag", ()=>{
    expect(a).toBeTruthy()
})

test("The anchor tag should be pink", ()=>{
    let styles = window.getComputedStyle(a);
    expect(styles["color"]).toBe("pink");
});

test("There should be a href attribute pointing to 'https://google.com'", ()=>{
    let href = a.getAttribute('href');
    expect(href).toBeTruthy();
    expect(href).toBe("https://google.com");
})

test("There should be a target attribute pointing to '_blank'", ()=>{
    let target = a.getAttribute('target');
    expect(target).toBeTruthy();
    expect(target).toBe("_blank");
})

test("The anchor tag should not contain any inline style", ()=>{
    let emptyBodyInlineStyle = {};
    expect(a.style._values).toEqual(emptyBodyInlineStyle);
});
