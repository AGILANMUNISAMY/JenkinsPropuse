const { Given, When } = require('@cucumber/cucumber');
const { FormPage } = require('../pages/form_field.page');

Given('user is on the test page', async function () {
    this.formPage = new FormPage(this.page);
    await this.formPage.openFormPage();
});

When('user enters the first name {string}', async function (firstName) {
    await this.formPage.enterFirstName(firstName);
});

When('user enters the last name {string}', async function (lastName) {
    await this.formPage.enterLastName(lastName);
});

When('user enters email {string}', async function (email) {
    await this.formPage.enterEmail(email);
});

When('user selects the country code {string}', async function (countryCode) {
    await this.formPage.selectCountryCode(countryCode);
});

When('user enters the phone number {string}', async function (phone) {
    await this.formPage.enterPhoneNumber(phone);
});

When(
    'user enters the address line {int} {string}',
    async function (line, address) {
        if (line === 1) {
            await this.formPage.enterAddressLine1(address);
        } else {
            await this.formPage.enterAddressLine2(address);
        }
    }
);

When('user enters the state {string}', async function (state) {
    await this.formPage.enterState(state);
});

When('user enters the postal code {string}', async function (postalCode) {
    await this.formPage.enterPostalCode(postalCode);
});

When('user selects the country {string}', async function (country) {
    await this.formPage.selectCountry(country);
});

When('user selects the date of birth {string}', async function (dob) {
    await this.formPage.selectDOB(dob);
});

When('user selects the gender {string}', async function (gender) {
    await this.formPage.selectGender(gender);
});

When('user accepts the terms and conditions', async function () {
    await this.formPage.acceptTerms();
});

When('user clicks the submit button', async function () {
    await this.formPage.submitForm();
});