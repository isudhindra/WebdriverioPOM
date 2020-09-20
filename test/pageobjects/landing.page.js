import BasePage from "./base.page";
import coreLib from "../utilities/coreLibrary";
import environment from "../support/env";



class landingPage extends BasePage {

  //
  get loginLink() {
    return $("a[href='/login/']");
  }

  //Token textbox
  get shortLivedToken() {
    return $("#token");
  }

  //apply button
  get applyButton() {
    return $("[id='btnApply']");
  }

  // define or overwrite page methods

  open() {
    super.open(environment.getEnv("depop"));
    console.log("URL....." + environment.getEnv("depop"));
    //this will append `login` to the baseUrl to form complete URL
    if (process.env.BrowserName == "chrome") {
      if (browser.isAlertOpen() === true) {
        browser.acceptAlert();
      }
    }
    browser.setTimeout({ pageLoad: 10000 });
  }

  /**
   * your page specific methods
   */

  //set token
  clickLogin() {
    coreLib.click(this.loginLink);
  }

  //click apply
  apply() {
    coreLib.click(this.applyButton);
    expect(browser.getTitle()).to.equal(confirmYourDetails.PageTitle);
  }
}
export default new landingPage();
