const { expect } = require('@playwright/test');

class SwitchPage {
  constructor(page) {
    this.page = page;
    this.context = page.context();

    // Switch Window
    this.switchWin = page.locator('legend:has-text("Switch Window Example")');
    this.openWindowBtn = page.locator('#openwindow');

    // Switch Tab
    this.switchTab = page.locator('legend:has-text("Switch Tab Example")');
    this.openTabBtn = page.locator('#opentab');

    // Alert Section
    this.alertSection = page.locator('legend:has-text("Switch To Alert Example")');
    this.nameInput = page.locator('#name');
    this.alertBtn = page.locator('#alertbtn');
    this.confirmBtn = page.locator('#confirmbtn');
  }

  async openPage() {
    await this.page.goto(
      'https://rahulshettyacademy.com/AutomationPractice/',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async verifySwitchWindowVisible() {
    await expect(this.switchWin).toBeVisible();
  }

  async clickOpenWindow() {
    const [newPage] = await Promise.all([
      this.context.waitForEvent('page'),
      this.openWindowBtn.click()
    ]);

    await newPage.waitForLoadState('load');
    await newPage.close();
    await this.page.bringToFront();
  }

  async verifySwitchTabVisible() {
    await expect(this.switchTab).toBeVisible();
  }

  async clickOpenTab() {
    const [newTab] = await Promise.all([
      this.context.waitForEvent('page'),
      this.openTabBtn.click()
    ]);

    await newTab.waitForLoadState('load');
    await newTab.close();
    await this.page.bringToFront();
  }

  async verifyAlertSection() {
    await expect(this.alertSection).toBeVisible();
  }

  async enterNameInAlert() {
    await this.nameInput.fill('Agilan');
  }

  async clickAlertAccept() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
    await this.alertBtn.click();
  }

  async clickConfirmAccept() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
    await this.confirmBtn.click();
  }

 
async displayelement() {
    await expect(
      this.page.locator('legend:has-text("Element Displayed Example")')
    ).toBeVisible();
  }

  async visibleinputbox() {
    await expect(this.page.locator("#displayed-text")).toBeVisible();
  }

  async clickhidebtn() {
    const hideBtn = this.page.locator("#hide-textbox");
    await hideBtn.click();

    await expect(this.page.locator("#displayed-text")).toBeHidden();
  }

  async clickshowbtn() {
    const showBtn = this.page.locator("#show-textbox");
    await showBtn.click();

    await expect(this.page.locator("#displayed-text")).toBeVisible();
  }


}

module.exports = { SwitchPage };