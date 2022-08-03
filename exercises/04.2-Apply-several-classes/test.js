const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock("fs");

describe("You should change the class on the div tag", () => {
    const div = document.querySelectorAll("div")
    test("There should only be 1 div tag", () => {
        expect(div.length).toBe(1)
    });

    test("The div class should NOT have the spades class", () => {
        div.forEach(e=>{
            expect(e.classList.contains("spade")).toBe(false) 
        })
    });
    test("The div class should have the heart class", () => {
        div.forEach(e=>{
            expect(e.classList.contains("heart")).toBe(true) 
        })
    });
});
