import BasePage from "./base.page";
import coreLib from "../utilities/coreLibrary";
import environment from "../support/env";


class homePage extends BasePage {


  get shopNowButton() {
    return $("main a[href='/search/']");
  }

  get sellOnDepop() {
    return $("div[class*=Card] a[href='/sell-on-depop/']");
  }

  get meetSellersLabel() {
    return $("//h2[contains(string(), 'Meet sellers')]");
  }

  //page specific methods

  clickShopNow() {
    coreLib.click(this.shopNowButton);
  }

  clickHomePageIcon() {
    coreLib.click(this.homePageIcon);
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
export default new homePage();
