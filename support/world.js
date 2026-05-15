const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async init() {
    const browserName = process.env.BROWSER || 'chromium';

    switch (browserName) {
      case 'firefox':
        this.browser = await firefox.launch({ headless: false });
        break;

      case 'webkit':
        this.browser = await webkit.launch({ headless: false });
        break;

      case 'chromium':
      default:
        this.browser = await chromium.launch({ headless: false });
        break;
    }

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async cleanUp() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
