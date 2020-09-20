import { Given, When, Then } from "cucumber";
import searchProducts from "../../pageobjects/searchProducts.page.js";
import coreLibrary from "../../utilities/coreLibrary.js";
import loginContent from "../../contents/loginPage.content.js";


Then(/^I click product \"(.*)\" from products list$/, productDesc => {
  searchProducts.clickByProductDesc(productDesc);
});

Then(/^I search product \"(.*)\"$/, productName => {
  searchProducts.searchProducts(productName);
});

Then(/^I click product price \"(.*)\" from products list$/, productPrice => {
  searchProducts.clickByProductPrice(productPrice);
});
