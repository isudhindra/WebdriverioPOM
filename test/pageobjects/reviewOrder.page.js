import BasePage from "./base.page";
import coreLib from "../utilities/coreLibrary";


class reviewOrder extends BasePage {

  //Defining locators
  get reviewOrderLabel() {
    return $("h1[data-qa='checkout_summary_title']");
  }

  get fullName() {
    return $("input[name=name]");
  }

  get address() {
    return $("input[name=address]");
  }

  get city() {
    return $("input[name=city]");
  }

  get state() {
    return $("input[name=state]");
  }

  get postCode() {
    return $("input[name=postal_code]");
  }

  get emailId() {
    return $("input[name=email]");
  }

  get phoneNumber() {
    return $("input[name=number]");
  }

  get addButton() {
    return $("form button");
  }

  get itemPrice() {
    return $("//td[contains(text(),'Item price')]/following-sibling::td");
  }

  get totalPrice() {
    return $("//td[contains(text(),'Total')]/following-sibling::td");
  }

  get changeAddress() {
    return $("button[data-qa='change_address_link']");
  }

  //page specific methods

  setFullName(name) {
    coreLib.setValue(this.fullName, name);
  }

  setAddress(addressLine) {
    coreLib.setValue(this.address, addressLine);
  }

  setCity(cityName) {
    coreLib.setValue(this.city, cityName);
  }

  setState(stateName) {
    coreLib.setValue(this.state, stateName);
  }

  setPostCode(postZipCode) {
    coreLib.setValue(this.postCode, postZipCode);
  }

  setEmailId(deliveryEmail) {
    coreLib.setValue(this.emailId, deliveryEmail);
  }

  setPhoneNumber(deliveryPhoneNumber) {
    coreLib.setValue(this.phoneNumber, deliveryPhoneNumber);
  }

  clickAdd() {
    coreLib.click(this.addButton);
  }

  getTotalPrice() {
    return coreLib.getText(this.itemPrice);
  }

  getItemPrice() {
    return coreLib.getText(this.totalPrice);
  }

  clickChangeAddress() {
    return coreLib.click(this.changeAddress);
  }

}
export default new reviewOrder();
