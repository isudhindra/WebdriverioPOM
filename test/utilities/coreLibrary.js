import BasePage from "../pageobjects/base.page";
import userData from "../utilities/globalTestData.js";
import testDataGenerator from "../utilities/testDataGenerator.js";
var faker = require('faker/locale/en_GB');
const https = require("https");
import axios from "axios";
let jwt = require("jwt-simple");
const config = require("../config/base.config.js");
const fs = require("fs-extra");
let randomInt = require("random-int");
const date = new Date();
let customerID;

class coreLibrary extends BasePage {

  convertMilliSecondsToMinutes(millis) {
    var minutes = Math.floor(millis / 60000);
    return minutes;
  }

  convertMilliSecondsToSeconds(millis) {
    var seconds = Math.floor(millis / 1000);
    return seconds;
  }

  //clearTextBoxValue
  clearTextBoxValue(element) {
    element.setValue(new Array(element.getValue().length).fill("Backspace"));
  }

  // setValue(element, value) {
  //   if (value != "") {
  //     element.waitForEnabled();
  //     element.setValue(new Array(element.getValue().length).fill("Backspace"));
  //     element.setValue(value);
  //   }
  // }
  setValue(element, value) {
    if (value != "") {
      try {
        element.waitForEnabled();
        element.click();
        element.moveTo();
        element.clearValue();
        element.click();
        element.setValue(new Array(element.getValue().length).fill("Backspace"));
        element.setValue(value);
      } catch (ex) {
        console.log(ex.toString());
      }
    }
  }

  click(element) {
    element.waitForDisplayed(1000);
    element.waitForClickable();
    element.click();
  }

  scrollIntoView(element) {
    element.scrollIntoView();
  }

  selectRadio(element) {
    element.waitForEnabled();
    element.click();
  }

  getText(element) {
    element.waitForDisplayed();
    return element.getText();
  }

  getPrice(element) {
    element.waitForDisplayed();
    return element.getText().replace("£", "").replace(",", "");
  }

  selectDropDownByValue(element, value) {
    element.waitForEnabled();
    element.click();
    let dropDown = $("[class='visible menu transition'] [data-bdd-selector='" + value + "']");
    dropDown.waitForDisplayed();
    dropDown.click();
  }

  isAvailable(element) {
    element.waitForDisplayed();
    return element.isExisting();
  }

  isNotAvailable(element) {
    browser.setImplicitTimeout(500);
    let isexis = element.waitForDisplayed(500, true);
    browser.setImplicitTimeout(config.waitforTimeout);
    return isexis;
  }

  validateTitleAndCloseNewTab(expectedTitle) {
    const windowHandles = browser.windowHandles();
    expect(browser.window(windowHandles.value[1]).getTitle()).to.equal(expectedTitle);
    browser.switchTab(windowHandles.value[1]); //Switching to new Tab
    browser.close(); //Closing newTab
    browser.switchTab(windowHandles.value[0]); //Switching to main tab to continue execution
  }

  acceptAlert() {
    browser.acceptAlert();
  }

  switchFrame(iframe) {
    browser.switchToFrame(iframe);
  }

  switchToParentFrame() {
    browser.switchToParentFrame();
  }

  getCurrentURL() {
    return browser.getUrl();
  }

  loadJsonData(JsonFilePath) {
    // var e2eJsonLibPath = userData.getField("testDataFolderPath");
    if (process.env.EnvironmentVar == null) {
      process.env.EnvironmentVar = browser.config.serverUrls.environment;
    }
    let rawdata = fs.readFileSync('test/testData/e2eScenarioTestData/' + process.env.EnvironmentVar + '/' + JsonFilePath);

    if (config.dynamicDataLoad == true) {
      let customerData = JSON.parse(rawdata);
      var seedingValue = customerData["randomSeeding"].value;
      testDataGenerator.setSeeder(seedingValue); //Setting Test Cases specific Seeding value
      customerData["aboutYou"] = testDataGenerator.generateAboutYouTestData(); //Generating and updating Json with dynamic data- About You
      customerData["employmentDetails"] = testDataGenerator.generateEmploymentDetailsTestData(); //Generating and updating Json with dynamic data - EmploymentPanel
      // console.log(customerData);
      rawdata = JSON.stringify(customerData);
    }
    // console.log(JSON.parse(rawdata));
    userData.setField("customerData", rawdata);
  }

  generateCustomerID(customer) {

    switch (customer) {
      case "Accept_Intro_Offer_Marketing":
        customerID = "100" + randomInt(9999999);
        this.loadJsonData("accept_introOffer_marktPref.json");
        break;

      case "Accept_Intro_Offer":
        customerID = "101" + randomInt(9999999);
        this.loadJsonData("accept_introOffer.json");
        break;

      case "Accept_Marketing":
        customerID = "102" + randomInt(9999999);
        this.loadJsonData("accept_marktPref.json");
        break;

      case "Accept":
        customerID = "103" + randomInt(9999999);
        this.loadJsonData("accept.json");
        break;

      case "Refer_Intro_Offer_Marketing":
        customerID = "200" + randomInt(9999999);
        this.loadJsonData("refer_introOffer_marktPref.json");
        break;

      case "Refer_Intro_Offer":
        customerID = "201" + randomInt(9999999);
        this.loadJsonData("refer_introOffer.json");
        break;

      case "Refer_Marketing":
        customerID = "202" + randomInt(9999999);
        this.loadJsonData("refer_marktPref.json");
        break;

      case "Refer":
        customerID = "203" + randomInt(9999999);
        this.loadJsonData("refer.json");
        break;

      case "Decline_Intro_Offer_Marketing":
        customerID = "300" + randomInt(9999999);
        this.loadJsonData("decline_introOffer_marktPref.json");
        break;

      case "Decline_Intro_Offer":
        customerID = "301" + randomInt(9999999);
        this.loadJsonData("decline_introOffer.json");
        break;

      case "Decline_Marketing":
        customerID = "302" + randomInt(9999999);
        this.loadJsonData("decline_marktPref.json");
        break;

      case "Decline":
        customerID = "303" + randomInt(9999999);
        this.loadJsonData("decline.json");
        break;

      case "DigitalBanking":
        customerID = '1234512345';
        this.loadJsonData("accept_introOffer_marktPref.json");
        break;

      case "Refer_Intro_Offer_NoBT_1454025303":
        customerID = '1454025303';
        userData.setField("CustomerID", customerID);
        this.loadJsonData("refer_introOffer_marktPref_Nobt_1454025303.json");
        break;

      case "Refer_Intro_Offer_YesBT_1454025303":
        customerID = '1454025303';
        userData.setField("CustomerID", customerID);
        this.loadJsonData("refer_introOffer_marktPref_Yesbt_1454025303.json");
        break;

      case "Refer_noIntroOffer_marktPref_3746803100":
        customerID = '3746803100';
        userData.setField("CustomerID", customerID);
        this.loadJsonData("refer_noIntroOffer_marktPref_3746803100.json");
        break;


      case "Decline_No_Intro_Offer_9451214508":
        customerID = '9451214508';
        userData.setField("CustomerID", customerID);
        this.loadJsonData("decline_no_introOffer_marktPref_9451214508.json");
        break;

      case "Decline_No_Intro_Offer_3963076102":
        customerID = '3963076102';
        userData.setField("CustomerID", customerID);
        this.loadJsonData("decline_introOffer_marktPref_3963076102.json");
        break;


      case "Decline_introOffer_marktPref_3470345000":
        customerID = '3470345000';
        userData.setField("CustomerID", customerID);
        this.loadJsonData("decline_introOffer_marktPref_3470345000.json");
        break;

      case "CNo_NONE":
        customerID = "NONE";
        // userData.setField("customerData", fs.readFileSync(e2eJsonLib+".json"))
        break;

      case "Under_18":
        customerID = '9459787410';
        break;

      case "ID_status_not_confirmed":
        customerID = '9459797406';
        break;

      case "Deceased":
        customerID = '9459867402';
        break;

      case "User_already_having_credit_card":
        customerID = '0123450101';
        break;

      case "Issue_with_Address":
        customerID = '0123450108';
        break;

      default:
        customerID = customer;
        break;
    }

    if (userData.getField("CustomerID") == "") {
      userData.setField("CustomerID", customerID);
    }
    return customerID;
  }

  loadTestData(keyItem) {
    queryStateBody = fs.readFileSync("test/testData/endtoend");
    userData.setField("customerData", userData.getField("pageLoadMsg"));
  }

  getCustomerData(panelData) {
    return JSON.parse(userData.getField("customerData"))[panelData];
  }

  randomNumber(minimum, maximum) {
    return faker.random.number({
      min: minimum,
      max: maximum
    });
  }

  randomBoolean() {
    return Math.random() >= 0.5 //Probability is 50 - 50 for true and false
  }

}
export default new coreLibrary();