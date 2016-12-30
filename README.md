# protractor-jasmine2-html-reporter
[![npm version](https://badge.fury.io/js/protractor-jasmine2-html-reporter.svg)](http://badge.fury.io/js/protractor-jasmine2-html-reporter)

HTML reporter for Jasmine2 and Protractor that will include screenshots of each test if you want.
This work is inspired by:
* [Protractor Jasmine 2 Screenshot Reporter](https://github.com/mlison/protractor-jasmine2-screenshot-reporter) from [@mslison](https://github.com/mlison)
* [Jasmine Reporters](https://github.com/larrymyers/jasmine-reporters) from [@larrymyers](https://github.com/larrymyers)

## Usage
The <code>protractor-jasmine2-html-reporter</code> is available via npm:

<code>$ npm install protractor-jasmine2-html-reporter --save-dev</code>

In your Protractor configuration file, register protractor-jasmine2-html-reporter in jasmine:

<pre><code>var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
   // ...
   onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   }
}</code></pre>

## Options
### Destination folder

Output directory for created files. All screenshots and reports will be stored here.

If the directory doesn't exist, it will be created automatically or otherwise cleaned before running the test suite.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   savePath: './test/reports/'
}));</code></pre>

Default folder: <code>./</code>

### Screenshots folder (optional)

By default the screenshots are stored in a folder inside the default path

If the directory doesn't exist, it will be created automatically or otherwise cleaned before running the test suite.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   savePath: './test/reports/',
   screenshotsFolder: 'images'
}));</code></pre>

Default folder: <code>screenshots</code>

### Take screenshots (optional)

When this option is enabled, reporter will create screenshots for specs.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   takeScreenshots: false
}));</code></pre>

Default is <code>true</code>

### Take screenshots only on failure (optional) - (NEW)

This option allows you to choose if create screenshots always or only when failures.
If you disable screenshots, obviously this option will not be taken into account.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   takeScreenshots: true,
   takeScreenshotsOnlyOnFailures: true
}));</code></pre>

Default is <code>false</code> (So screenshots are always generated)


### FixedScreenshotName (optional)

Choose between random names and fixed ones.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   savePath: './test/reports/',
   fixedScreenshotName: true
}));</code></pre>

Default is <code>false</code>


### FilePrefix (optional)

Filename for html report.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   savePath: './test/reports/',
   fileNamePrefix: 'Prefix'
}));</code></pre>

Default is <code>nothing</code>

### Consolidate and ConsolidateAll (optional)

This option allow you to create a single file for each reporter.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   consolidate: false,
   consolidateAll: false
}));</code></pre>

Default is <code>true</code>

### CleanDestination (optional)

This option, if false, will not delete the reports or screenshots before each test run. 

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   savePath: './test/reports/',
   cleanDestination: false
}));</code></pre>

Default is <code>true</code>

### showPassed (optional)

This option, if false, will show only failures. 

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   ....
   showPassed: false
}));</code></pre>

Default is <code>true</code>

### fileName (optional)

This will be the name used for the html file generated thanks to this tool.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   ....
   fileName: 'MyReportName'
}));</code></pre>

Default is <code>htmlReport</code>

### fileNameSeparator (optional)

This will set the separator between filename elements, for example, prefix, sufix etc.

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   ....
   fileNameSeparator: '_'
}));</code></pre>

Default is <code>-</code>

### fileNamePrefix (optional)

Prefix used before the name of the report

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   ....
   fileNamePrefix: ''
}));</code></pre>

Default is <code>empty</code>

### fileNameSuffix (optional)

Prefix used after the name of the report

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   ....
   fileNameSuffix: ''
}));</code></pre>

Default is <code>empty</code>

### fileNameDateSuffix (optional)

Datetime information to be added in the name of the report. This will be placed after the fileNameSuffix if it exists.
The format is: YYYYMMDD HHMMSS,MILL -> 20161230 133323,728

<pre><code>jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   ....
   fileNameDateSuffix: true
}));</code></pre>

Default is <code>false</code>