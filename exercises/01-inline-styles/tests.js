const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Set up the DOM environment
const { window } = new JSDOM(html);
const { document } = window;

// Run the tests
test("There should be a table element", () => {
    const table = document.querySelector("table");
    expect(table).toBeTruthy();
});

test("The table background color should be green", () => {
    const table = document.querySelector("table");
    const computedStyles = window.getComputedStyle(table);
    expect(computedStyles.backgroundColor).toBe("green");
});

test("There should be two table rows", () => {
    const rows = document.querySelectorAll("tr");
    expect(rows.length).toBe(2);
});