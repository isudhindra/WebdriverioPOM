import BasePage from "./base.page";
import coreLib from "../utilities/coreLibrary";


class product extends BasePage {

  //Defining locators
  get productPrice() {
    return $("td[data-testid='product__price'] span");
  }

  get productSize() {
    return $("tr[data-testid='product__singleSize'] td");
  }

  get buyNow() {
    return $("a[data-testid='button__buyNow']");
  }

  //page specific methods

  getProductPrice() {
    return coreLib.getText(this.productPrice);
  }

  getProductSize() {
    return coreLib.getText(this.productSize);
  }

  clickBuyNow() {
    coreLib.click(this.buyNow);
  }

}
export default new product();
