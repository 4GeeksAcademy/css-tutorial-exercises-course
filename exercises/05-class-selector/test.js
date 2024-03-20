const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock("fs");

describe("Both <p> tags should have a blue background", () => {
    const body = document.querySelector("body")
    const p = document.querySelectorAll("p");
    test("You should not change the existing <head> tag elements", () => {
        let head = document.querySelector('head')
        expect(head).toBeTruthy()

        let meta = head.querySelector("meta")
        expect(meta).toBe(null)

        let title = head.querySelector('title').innerHTML
        expect(title).toBe('05 Class selector')
    });

    test("The <body> tag should not contain any inline style", () => {
        document.querySelector(
            "head"
        ).innerHTML = `<style>${css.toString()}</style>`;
        let emptyBodyInlineStyle = {};
        expect(body.style._values).toEqual(emptyBodyInlineStyle)
    });

    test("There should be two <p> tags", () => {
        expect(p.length).toBe(2)
    });
    test("Both <p> tags should have a class name 'b-blue'", () => {
        p.forEach(e=>{
            let eClass = e.getAttribute("class");
            expect(eClass).toBe("b-blue")
        })
    });
});
