import BasePage from "./base.page";
import coreLib from "../utilities/coreLibrary";
import loginPageDetails from "../contents/loginPage.content.js";

class LoginPage extends BasePage {

  //Locators for page objects
  get loginLabel() {
    return $("h1[class*='Title']");
  }

  get usernameEditBox() {
    return $("input[name='username']");
  }

  get passwordEditBox() {
    return $("input[name='password']");
  }

  get forgotPasswordLink() {
    return $("a[href*='password-reset']");
  }

  get loginButton() {
    return $("button[data-testid='login__cta']");
  }

  get faceBookButton() {
    return $("button[data-testid='facebook-button']");
  }

  get signUpButton() {
    return $("a[href*='signup']");
  }

  get usernameErrorMessage() {
    return $("span[data-testid='login__error--username']");
  }

  get passwordErrorMessage() {
    return $("span[data-testid='login__error--password']");
  }

  //set userName
  setUserName(username) {
    coreLib.setValue(this.usernameEditBox, username);
  }

  //set password
  setPassword(password) {
    coreLib.setValue(this.passwordEditBox, password);
  }

  //click Forget password
  clickForgetPassword() {
    coreLib.click(this.forgotPasswordLink);
  }

  //click Signup button
  clickSignUp() {
    coreLib.click(this.signUpButton);
  }

  //click Login
  clickLogin() {
    coreLib.click(this.loginButton);
    expect(browser.getTitle()).to.equal(loginPageDetails.loginPageTitle);
  }

  getUserNameError() {
    return coreLib.getText(this.usernameErrorMessage);
  }

  getPasswordError() {
    return coreLib.getText(this.passwordErrorMessage);
  }
}
export default new LoginPage();
