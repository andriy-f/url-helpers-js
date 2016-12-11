/**
 * Combine url fragments
 */
var stringHelpers = require('string-helpers').stringUtils;

exports.combine = function (baseUrl, fragment) {
    var trimmedBaseUrl = stringHelpers.trimRight(baseUrl, '/'),
        trimmedFragment = stringHelpers.trimLeft(fragment, '/');

    return trimmedBaseUrl + '/' + trimmedFragment;
};