
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('alert should be called', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('alert() function should be called', function () {

        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        global.alert = jest.fn((text) => console.log(text));

        //then I import the index.js (which should have the window.alert inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        expect(alert.mock.calls.length).toBe(1);
    });
});