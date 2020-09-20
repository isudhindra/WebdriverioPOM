const config = require("../config/base.config.js");
export default class BasePage {
  constructor() {
    this.title = "My Page";
  }

  open(path) {
    browser.deleteCookies();
    browser.url(path);
    if (process.env.BrowserName != "safari") {
      browser.setWindowSize(1920, 1080);
    }
    browser.setTimeout({ 'implicit': config.waitforTimeout });
  }
}
