const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {

  if (scenario.result.status === 'FAILED') {
    await this.page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name}.png`,
      fullPage: true
    });
  }

  await this.browser.close();
});






























