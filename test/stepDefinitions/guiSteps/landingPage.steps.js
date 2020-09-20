import { Given, When, Then } from "cucumber";
import landingPage from "../../pageobjects/landing.page.js";


Given(/^I am on Depop website$/, () => {
  landingPage.open();
});

When(/^I click on login link$/, () => {
  landingPage.clickLogin();
});