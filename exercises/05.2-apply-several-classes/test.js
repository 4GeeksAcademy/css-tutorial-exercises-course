const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock("fs");

describe("You should change the class on the div tag", () => {
    const div = document.querySelector("div");

    test('The <div> should NOT have the "spades" class', () => {
        expect(div.classList.contains("spade")).toBe(false);
    });

    test('The <div> should have the "heart" class', () => {
        expect(div.classList.contains("heart")).toBe(true);
    });
});
