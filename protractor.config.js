// An example configuration file
exports.config = {

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'phantomjs'
    },
    framework: 'jasmine2',

    //directConnect: true,

    specs: ['test/**/*[sS]pec.js'],

    onPrepare: function() {

        return global.browser.getProcessedConfig().then(function (config) {
            var Jasmine2HtmlReporter = require('./index.js');

            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: './test/reports/'
            }));
        });


    }
};