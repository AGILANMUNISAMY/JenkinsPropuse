const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { EditPage } = require("../pages/input_field.page");

Given('user on the test page', async function () {
  // Create page object
  this.editPage = new EditPage(this.page);

  // Navigate to LetCode test page
  await this.editPage.openEditPage();
});

When('user able to click the edit option', async function () {
  await this.editPage.clickEditOption();
});

When('user enter the full name', async function () {
  await this.editPage.enterUserName('Agilan Munisamy');
});

When('user append the test using keyboard tab', async function () {
  await this.editPage.appendTextAndPressTab('I am good');
});

When('user retrive text inside the text box', async function () {
  const text = await this.editPage.insideTheTextBox();
  console.log('Retrieved text:', text);
});

When('user clear the text', async function () {
  await this.editPage.clearTheText();
});

When('user confirm that edit field is disabled', async function () {
  const disabled = await this.editPage.confirmEditFieldDisabled();
  expect(disabled).toBeTruthy();
});

When('the text field should be readonly', async function () {
  const readonly = await this.editPage.confirmTextReadonly();
  expect(readonly).toBeTruthy();
});