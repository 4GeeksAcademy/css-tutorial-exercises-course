
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

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

    it('the html code should contain a p tag', function () {

        // we can read from the source code
        console.log(html.toString());
        expect(html.toString().indexOf(`<p`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const pTags = document.querySelectorAll("p");
        expect(pTags.length).toBe(1);
    });


    it('the p tag should have a class "big"', function () {

        //or use query selector to compare hoy mane scriptags do we have
        const p = document.querySelector("p");
        expect(p.classList.contains("big")).toBeTruthy();
    });
});