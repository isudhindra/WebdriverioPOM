import { Given, When, Then } from "cucumber";
import coreLib from "../../utilities/coreLibrary.js"

Then(/^I should see the window title as "(.*)" opened in the same window/, expectedValue => {
  let windowHandles = browser.getWindowHandles();
  assert.equal(browser.switchWindow(windowHandles.value[0]).getTitle(), expectedValue, "Actual Value : " + browser.switchWindow(windowHandles.value[0]).getTitle() + "\n Expected Value : " + expectedValue + "\n Actual and Expected not matched");
});

Then(/^I should see the window title as "(.*)"/, expectedValue => {
  assert.equal(browser.getTitle(), expectedValue, "Actual Value : " + browser.getTitle() + "\n" + "Expected Value : " + expectedValue + "\n" + "Actual and Expected not matched");
});

Then(/^I should see the window title "(.*)" opened in the new tab/, expectedValue => {
  browser.switchToWindow(browser.getWindowHandles()[browser.getWindowHandles().length - 1]);
  expect(browser.getTitle().toString()).to.equal(expectedValue);
  browser.closeWindow();
  browser.switchToWindow(browser.getWindowHandles()[browser.getWindowHandles().length - 1]);
});

Given(/^I set customer data for scenario "(.*)"/, scenario => {
  coreLib.generateCustomerID(scenario)
});