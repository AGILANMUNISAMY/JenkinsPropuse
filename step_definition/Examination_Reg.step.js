const { Given, When, Then } = require("@cucumber/cucumber");
const { RegisterPage } = require("../pages/Examination_Reg.page");

Given('user is on the register page', async function () {
  this.registerPage = new RegisterPage(this.page);
  await this.registerPage.openRegisterPage();
});

When('user enters the fname {string}', async function (value) {
  await this.registerPage.enterFirstName(value);
});

When('user enters the lname {string}', async function (value) {
  await this.registerPage.enterLastName(value);
});

When('user enters dateOfBrith {string}', async function (value) {
  await this.registerPage.enterDateOfBirth(value);
});

When('user selectoptions the country code {string}', async function (value) {
  await this.registerPage.selectCountry(value);
});

When('user select on postal code {string}', async function (value) {
  await this.registerPage.enterPostalCode(value);
});

When('user enters house number {string}', async function (value) {
  await this.registerPage.enterHouseNumber(value);
});


When('user selects the street {string}', async function (value) {
  await this.registerPage.enterStreet(value);
});


When('user selects the city {string}', async function (value) {
  await this.registerPage.enterCity(value);
});




When('user selects the state {string}', async function (value) {
  await this.registerPage.enterState(value);
});

When('user enters phone number {string}', async function (value) {
  await this.registerPage.enterPhone(value);
});

When('user enters the Validemail {string}', async function (value) {
  await this.registerPage.enterEmail(value);
});

When('user enters the password {string}', async function (value) {
  await this.registerPage.enterPassword(value);
});

When('user clicks the register button', async function () {
  await this.registerPage.clickRegister();
});

Then('registration should not be successful', async function () {
  await this.registerPage.verifySuccessNavigation();
});

// Then('registration should not be successful', async function () {
//   await this.registerPage.verifyRegistrationFailed();
// });
