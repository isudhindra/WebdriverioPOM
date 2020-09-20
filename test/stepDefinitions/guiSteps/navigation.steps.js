import { Given, When, Then } from "cucumber";
import navigationPage from "../../pageobjects/navigation.page.js";
import coreLibrary from "../../utilities/coreLibrary.js";

Then(/^I validate default fields from navigation menu$/, () => {
  expect(coreLibrary.isAvailable(navigationPage.searchLink)).to.equal(true);
  expect(coreLibrary.isAvailable(navigationPage.sellLink)).to.equal(true);
  expect(coreLibrary.isAvailable(navigationPage.mailsIcon)).to.equal(true);
  expect(coreLibrary.isAvailable(navigationPage.profileIcon)).to.equal(true);
  navigationPage.clickProfileIcon();
  expect(coreLibrary.isAvailable(navigationPage.yourProfile)).to.equal(true);
  expect(coreLibrary.isAvailable(navigationPage.logOut)).to.equal(true);
  expect(coreLibrary.isAvailable(navigationPage.homePageIcon)).to.equal(true);
});

Then(/^I click on search link$/, () => {
  expect(coreLibrary.isAvailable(navigationPage.profileIcon)).to.equal(true); //this step will make sure that Login is successful
  navigationPage.clickSearch();
});

Then(/^I click on sell link$/, () => {
  expect(coreLibrary.isAvailable(navigationPage.profileIcon)).to.equal(true);//this step will make sure that Login is successful
  navigationPage.clickSell();
});

Then(/^I click on mail link$/, () => {
  navigationPage.clickMailIcon();
});

Then(/^I click on profile link$/, () => {
  navigationPage.clickProfileIcon();
});

Then(/^I click on your profile link$/, () => {
  navigationPage.clickYourProfile();
});

Then(/^I click on logout link$/, () => {
  navigationPage.clickLogOut();
});

Then(/^I validate profile icon value \"(.*)\"$/, profileIconValue => {
  expect(navigationPage.getUserInitials()).to.equal(profileIconValue);
});

