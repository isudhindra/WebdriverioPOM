import { Given, When, Then } from "cucumber";
import reviewOrder from "../../pageobjects/reviewOrder.page.js";
import coreLibrary from "../../utilities/coreLibrary.js";

Then(/^I validate default fields from review order page$/, () => {
  expect(coreLibrary.isAvailable(reviewOrder.itemPrice)).to.equal(true);
  expect(coreLibrary.isAvailable(reviewOrder.totalPrice)).to.equal(true);
  expect(coreLibrary.isAvailable(reviewOrder.reviewOrderLabel)).to.equal(true);
  expect(coreLibrary.isAvailable(reviewOrder.changeAddress)).to.equal(true);
});

Then(/^I click on change address link on review order page$/, () => {
  reviewOrder.clickChangeAddress();
});

Then(/^I change address on review order page$/, dataTable => {
  var data = dataTable.rowsHash();
  console.log(data);
  reviewOrder.setFullName(data.FullName);
  reviewOrder.setAddress(data.Address);
  reviewOrder.setCity(data.City);
  reviewOrder.setState(data.State);
  reviewOrder.setPostCode(data.PostCode);
  reviewOrder.setEmailId(data.EmailId);
  reviewOrder.setPhoneNumber(data.PhoneNumber);
  reviewOrder.clickAdd();
});