(function () {
    describe('urlHelpers tests', function () {
        var urlHelpers = require('../url-helpers.js');

        it('Should concat base and relativeUrl', function () {
            expect(urlHelpers.combine('http://example.com/', '/category/resource')).toBe('http://example.com/category/resource');
        });
    });
})();