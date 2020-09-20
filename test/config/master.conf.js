const defaultTimeoutInterval = process.env.DEBUG ? 60 * 60 * 500 : 90000;
const config = require("./base.config");
const { generate } = require("multiple-cucumber-html-reporter");
const { removeSync } = require("fs-extra");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var startTime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

exports.config = {

  serverUrls: {
    environment: "devRl"
  },

  specs: [
    "test/features/GUI/confirmYourDetailsSection/*",
    "test/features/GUI/enterYourVerificationCodeSection/*",
    "test/features/GUI/otcAcceptedThanksSection/*",
    "test/features/GUI/startApplicationSection/*",
    "test/features/GUI/1_aboutYouSection/*",
    "test/features/GUI/2_employmentPanel/*",
    "test/features/GUI/3_checkingYourEligibility/*",
    "test/features/GUI/4_importantInformation/*",
    "test/features/GUI/5_hardQuote/*",
    "test/features/GUI/6_digitalBanking/*",
    "test/features/GUI/7_directDebitSetup/*",
    "test/features/GUI/8_setUpBalanceTransfer/*",
    "test/features/GUI/endToEndScenarios/*",
    "test/features/API/**/*"
  ],

  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 8,

  capabilities: [
    {
      browserName: "chrome",
      version: "latest",
      platform: "Windows 10",
      acceptInsecureCerts: true,
      extendedDebugging: true,
      name: "chrome-Latest-Windows10",
      "cjson:metadata": {
        browser: {
          name: "chrome",
          version: "latest"
        },
        device: "Windows 10",
        platform: {
          name: "Windows",
          version: "10"
        }
      }
    }
  ],

  perfLoggingPrefs: [
    {
      enableNetwork: true
      // enablePage?: boolean;
      // enableTimeline?: boolean;
      // tracingCategories?: boolean;
      // bufferUsageReportingInterval?: boolean;
    }
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  logLevel: config.logLevel, // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true, // Enables colors for log output.
  screenshotPath: "./test/reports/errorShots/", // Saves a screenshot to a given path if a command fails.
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: config.baseUrl,
  path: "/wd/hub",
  user: process.env.SAUCELABS_USER_NAME,
  key: process.env.SAUCELABS_KEY,
  waitforTimeout: config.waitforTimeout, // Default timeout for all waitFor* commands.
  connectionRetryTimeout: config.connectionRetryTimeout, // Default timeout in milliseconds for request  if Selenium Grid doesn't send response
  connectionRetryCount: config.connectionRetryCount, // Default request retries count

  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  //
  reporters: [
    "spec",
    [
      "cucumberjs-json",
      {
        jsonFolder: "test/reports/",
        language: "en"
      }
    ]
  ],

  services: ["selenium-standalone"],
  //services: ['selenium-standalone', 'phantomjs', 'appium'],
  //
  framework: "cucumber",

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    requireModule: ["@babel/register"],
    require: ["test/stepDefinitions/**/**.js"], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    //compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
    compiler: [], // <string[]> filetype:compiler used for processing required features
    failAmbiguousDefinitions: true, // <boolean< Treat ambiguous definitions as errors
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: false, // <boolean> abort the run on first failure
    ignoreUndefinedDefinitions: true, // <boolean> Enable this config to treat undefined definitions as warnings
    name: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    snippets: true, // <boolean> hide step definition snippets for pending steps
    format: ["pretty"], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: false, // <boolean> hide step definition snippets for pending steps
    source: false, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: true, // <boolean> fail if there are any undefined or pending steps
    tagExpression: "not @manual", // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
    timeout: defaultTimeoutInterval, // <number> timeout for step definitions
    tagsInTitle: false, // <boolean> add cucumber tags to feature or scenario name
    snippetSyntax: undefined // <string> specify a custom snippet syntax
  },

  //
  // =====
  // Hooks
  // =====
  // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function () {
    /**
     * Setup the Chai assertion framework
     */
    const chai = require("chai");
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },

  afterScenario: function (uri, feature, scenario, result, sourceLocation) { },

  afterStep: function (stepResult, stepData) {
    if (stepResult.status != "passed") {
      cucumberJson.attach(browser.takeScreenshot(), "image/png");
    }
  },

  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   */
  onComplete: () => {
    // Generate the report when it all tests are done
    generate({
      // Required
      // This part needs to be the same path where you store the JSON files
      // default = '.tmp/json/'
      //for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
      jsonDir: "test/reports/",
      reportPath: "test/reports/",
      displayDuration: true,
      //openReportInBrowser: true,
      customMetadata: false,
      pageFooter: "<div><p>text-align:center; DEPOP TEST</p></div>",
      reportName:
        "DEPOP TAKE HOME TEST",
      customData: {
        title: "Automated Tests Info",
        data: [
          { label: "Project", value: "DEPOP TAKE HOME TEST" },
          { label: "Release", value: "Version 1.0.0" },
          { label: "Execution Start Date", value: date },
          { label: "Execution Start Time", value: startTime }
        ]
      }
    });
  }
};
