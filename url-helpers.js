(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['string-helpers'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('string-helpers'));
    } else {
        // Browser globals (root is window)
        root.urlHelpers = factory(root.stringHelpers);
    }
} (this, function (stringHelpers) {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.

    /**
     * Combine url fragments
     */
    function combine(baseUrl, fragment) {
            var stringUtils = stringHelpers.stringUtils,
                trimmedBaseUrl = stringUtils.trimRight(baseUrl, '/'),
                trimmedFragment = stringUtils.trimLeft(fragment, '/');

            return trimmedBaseUrl + '/' + trimmedFragment;
        }
 
    var urlHelpers = {
        combine: combine
    };

    return urlHelpers;
}));