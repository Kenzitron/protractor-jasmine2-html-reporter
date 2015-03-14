// An example configuration file
exports.config = {

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',

    directConnect: true,

    specs: ['test/**/*[sS]pec.js'],

    onPrepare: function() {

        var Jasmine2HtmlReporter = require('./index.js');

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/'
        }));

    }
};