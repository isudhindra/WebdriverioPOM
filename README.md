### Installation

This project is tested on **_Node v10.6.0_** and Above. While earlier versions of node may be compatible, they have not been tested or verified.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install from the site - https://nodejs.org/en/ take the LTS version based on your Operating system. Please make sure you install NodeJS globally. If you have nvm installed globally, then run `nvm install` to get the latest version of node specified in the`.nvmrc` file [here](/.nvmrc).

        node --version
        npm --version

Above command should print out the version that you have installed.

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

### Running automation pack for DEPOP Test

npm run test

To execute depop tests on browser stack use but you need to update user name and key before running command: `npm run browserStack`

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.Screenshots will be taken across each step and utilized multiple cucumber automation framework. Open HTML reports using below command.

run command: `open test/reports/index.html`

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways. The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite. Config files can be found in the `/test/config/` directory and all end with `*.conf.js`. These can be called via the the cli

### The Page Object Design Pattern

Within your web app's UI there are areas that your tests interact with. A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. The next challenge is to keep the code you write nice and DRY (Don't Repeat Yourself).
