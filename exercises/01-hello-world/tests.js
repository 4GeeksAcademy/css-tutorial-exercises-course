const index = require("./index");
const alert = jest.mock((text) => console.log(text));

describe('alert was called', function () {
    beforeEach(() => { });
    afterEach(() => { jest.resetModules(); });

    it('alert was called', function () {
        expect(document.querySelector('ul')).toBeTruthy();
    });
});