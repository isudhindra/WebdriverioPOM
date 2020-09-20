import BasePage from "./base.page";
import coreLib from "../utilities/coreLibrary";
import environment from "../support/env";


class navigation extends BasePage {

  //Defining locators
  get searchLink() {
    return $("li[data-testid='navigation__search'] a[href='/search/']");
  }

  get sellLink() {
    return $("a[href='/products/create/']");
  }

  get mailsIcon() {
    return $("a[href*='messages']");
  }

  get profileIcon() {
    return $("li[data-testid='navigation__profile'] div[class*='avatar']");
  }

  get yourProfile() {
    return $("li[data-testid='navigation__profile'] a[data-testId*='nav-profile']");
  }

  get logOut() {
    return $("li[data-testid='navigation__profile'] button[data-testId*='logout']");
  }

  get homePageIcon() {
    return $("span[class*='Logo'] title");
  }

  //page specific methods

  clickSearch() {
    coreLib.click(this.searchLink);
  }

  clickSell() {
    coreLib.click(this.sellLink);
  }

  clickMailIcon() {
    coreLib.click(this.mailsIcon);
  }

  clickSearch() {
    coreLib.click(this.searchLink);
  }

  clickProfileIcon() {
    coreLib.click(this.profileIcon);
  }

  clickYourProfile() {
    coreLib.click(this.profileIcon);
    coreLib.click(this.yourProfile);
  }

  clickLogOut() {
    coreLib.click(this.profileIcon);
    coreLib.click(this.logOut);
  }

  getUserInitials() {
    return coreLib.getText(this.profileIcon);
  }
}
export default new navigation();
