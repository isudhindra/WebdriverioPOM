import { Given, When, Then } from "cucumber";
import product from "../../pageobjects/product.page.js";
import coreLibrary from "../../utilities/coreLibrary.js";

Then(/^I validate default fields from product page$/, () => {
  expect(coreLibrary.isAvailable(product.productPrice)).to.equal(true);
  expect(coreLibrary.isAvailable(product.productSize)).to.equal(true);
  expect(coreLibrary.isAvailable(product.buyNow)).to.equal(true);
});

Then(/^I click on buy now button on product page$/, () => {
  product.clickBuyNow();
});