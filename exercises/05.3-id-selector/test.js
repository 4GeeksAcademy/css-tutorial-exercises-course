const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

const span = document.querySelector("span");
const link = document.querySelector("link");

test("There should be a <span> tag", () => {
    expect(span).toBeTruthy()
});

test("The <span> tag should have the id 'button1'", () => {
    expect(span).toBeTruthy();
    let id = span.id
    expect(id).toBeTruthy();
    expect(id).toBe('button1');
});

test("The <span> tag should not contain any inline style", () => {
    let emptyBodyInlineStyle = {};
    expect(span).toBeTruthy()
    expect(span.style._values).toEqual(emptyBodyInlineStyle);
});

test("You should not change the existing <head> tag elements", () => {
    let head = document.querySelector('head');
    expect(head).toBeTruthy();

    let meta = head.querySelector("meta");
    expect(meta).toBe(null);

    const href = link.getAttribute("href");
    expect(href).toBe('./styles.css');
});
