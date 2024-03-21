const fs = require("fs");
const path = require("path");
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("CSS Styles", () => {
    beforeAll(() => {
        document.querySelector("head").innerHTML = `<style>${css.toString()}</style>`;
    });

    test("Cocacola list style should be applied correctly", () => {
        const cocacolaItems = document.querySelectorAll(".cocacola");
        cocacolaItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("lower-alpha");
        });
    });

    test("Pepsi list style should be applied correctly", () => {
        const pepsiItems = document.querySelectorAll(".pepsi");
        pepsiItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("square");
        });
    });

    test("Healthy list style should be applied correctly", () => {
        const healthyItems = document.querySelectorAll(".healthy");
        healthyItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("armenian");
        });
    });

    test("Dev-drinks list style should be applied correctly", () => {
        const devDrinksItems = document.querySelectorAll(".dev-drinks");
        devDrinksItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("none");
        });
    });
});
