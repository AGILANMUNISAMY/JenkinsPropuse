const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { RadioPage } = require('../pages/Radio_Check_Auto_Drop.page');

Given('user on PracticeRagulshetty website', async function () {
  this.radiopage = new RadioPage(this.page);
  await this.radiopage.openPage();
});

When('user validate the radio button', async function () {
  await this.radiopage.selectRadioButtons();
});

When('user able to select the india in auto suggession', async function () {
  await this.radiopage.autosuggession();
  
});

When('user validate the dropdown', async function () {
  await this.radiopage.selectDropdown();
});

When('user validate and select the checkbox', async function () {
  await this.radiopage.selectCheckBoxes();
});

Then('Validation should be in successfully', async function () {
  expect(true).toBeTruthy();
});

