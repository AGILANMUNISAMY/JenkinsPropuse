const { Given, When, Then } = require('@cucumber/cucumber');
const { SwitchPage } = require('../pages/Switch_Window_Tab_Alert.page');

Given('user on the raghul shetty automation practice page', async function () {
  this.switchPage = new SwitchPage(this.page);
  await this.switchPage.openPage();
});

When('users are able to visible Switch Window Example Text', async function () {
  await this.switchPage.verifySwitchWindowVisible();
});

When('user should click the open window button', async function () {
  await this.switchPage.clickOpenWindow();
});

When('users are able to visible Switch Tab Example', async function () {
  await this.switchPage.verifySwitchTabVisible();
});

When('user should click the Open tab', async function () {
  await this.switchPage.clickOpenTab();
});

When('users are able to visible Switch To Alert Example', async function () {
  await this.switchPage.verifyAlertSection();
});

When('user enter the full name in alert field', async function () {
  await this.switchPage.enterNameInAlert();
});

When('user click the alert', async function () {
  await this.switchPage.clickAlertAccept();
});

Then('alert popup should be displayed', async function () {
  // Dialog handled internally
});

Then('user accept the alert', async function () {
  // Already accepted
});

When('user click the confirm', async function () {
  await this.switchPage.clickConfirmAccept();
});

Then('confirm popup should be displayed', async function () {
  // Dialog handled internally
});

Then('user accept the confirm', async function () {
  // Already accepted
});


When("users are able to visible Element Displayed Example", async function () {
  await this.switchPage.displayelement();
});

When("user able to visible the inputbox", async function () {
  await this.switchPage.visibleinputbox();
});

When(
  "user are able to click the hidebtn and check the input is hide", async function () {
    await this.switchPage.clickhidebtn();
  }
);

When(
  "user are able to click the showbtn and check the input again visible", async function () {
    await this.switchPage.clickshowbtn();
  }
);

