import { Given, When, Then } from "cucumber";
import loginPage from "../../pageobjects/login.page.js";
import coreLibrary from "../../utilities/coreLibrary.js";
import loginContent from "../../contents/loginPage.content.js";


Then(/^I validate default fields on home page$/, () => {
  expect(coreLibrary.isAvailable(loginPage.loginLabel)).to.equal(true);
  expect(coreLibrary.isAvailable(loginPage.usernameEditBox)).to.equal(true);
  expect(coreLibrary.isAvailable(loginPage.passwordEditBox)).to.equal(true);
  expect(coreLibrary.isAvailable(loginPage.forgotPasswordLink)).to.equal(true);
  expect(coreLibrary.isAvailable(loginPage.faceBoologinButtonkButton)).to.equal(true);
  expect(coreLibrary.isAvailable(loginPage.faceBookButton)).to.equal(true);
  expect(coreLibrary.isAvailable(loginPage.signUpButton)).to.equal(true);
});

Then(/^I set username \"(.*)\" on login page$/, userName => {
  loginPage.setUserName(userName);
});

Then(/^I set password \"(.*)\" on login page$/, password => {
  loginPage.setPassword(password);
});

When(/^I click on login button$/, () => {
  loginPage.clickLogin();
});

Then(/^I validate username and password error messages$/, () => {
  loginPage.clickLogin();
  expect(loginPage.getUserNameError()).to.equal(loginContent.userNameError);
  expect(loginPage.getPasswordError()).to.equal(loginContent.passwordError);
});
