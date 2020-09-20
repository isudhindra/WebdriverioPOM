import BasePage from "./base.page";
import coreLib from "../utilities/coreLibrary";
import { assert } from "chai";
import productData from "../utilities/globalTestData.js";
import userData from "../utilities/globalTestData.js";

class searchProductsPage extends BasePage {


  //Defining locators
  get productsList() {
    return $$("ul[data-testid='product__items'] li");
  }

  get productsListName() {
    return $("ul[data-testid='product__items'] li a[href*='/products/" + productData.getField("productdesc") + "']");
  }

  get productsPrice() {
    return $$("ul[data-testid='product__items'] li span[class*=Price]");
  }

  get productsImg() {
    return $$("ul[data-testid='product__items'] a img");
  }

  get searchEdit() {
    return $("input[data-testid='input__search']");
  }

  searchProducts(productName) {
    coreLib.click(this.searchEdit);
    coreLib.setValue(this.searchEdit, productName);
    browser.keys("\uE007"); //hitting enter to search items from the products search
  }

  clickByProductDesc(productDescription) {
    userData.setField("productdesc", productDescription);
    // let productPrice = productImage.$("/following-sibling::div/span");
    // console.log("Product Desc" + productDesc + " Price" + coreLib.getText(productPrice));
    coreLib.click(this.productsListName);
  }

  clickByProductPrice(expProductPrice) {
    var productFound = false;
    for (let element of productsList) {
      let productPrice = coreLib.getText(element.$("//span[last()]"));
      console.log("productPrice" + productPrice);
      if (productPrice === expProductPrice) {
        coreLib.click(element.$("a"));
        productFound = true;
        break;
      }
    }
    if (productFound !== false) {
      assert.fail("Expected product price:" + expProductPrice + " not found from the list");
    }
  }
}
export default new searchProductsPage();
