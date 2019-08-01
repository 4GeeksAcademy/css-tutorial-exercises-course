
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('alert() function should be called', function () {

        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        global.alert = jest.fn((text) => console.log(text));

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        expect(alert.mock.calls.length).toBe(1);
    });
});


describe('All the styles should be applied', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();

        //apply the styles from the stylesheet if needed
        document.querySelector('head').innerHTML = `<style>${css.toString()}</style>`;
    });
    afterEach(() => { jest.resetModules(); });

    it('the background should be blue', function () {

        // get computed styles of any element you like
        const body = document.querySelector('body');
        var styles = window.getComputedStyle(body);
        expect(styles["background-color"]).toBe("blue");
    });
});


describe('All the html should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('the html code should contain a script tag', function () {

        // we can read from the source code
        console.log(html.toString());
        expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const scripts = document.querySelectorAll("script");
        expect(scripts.length).toBe(1);
    });
});