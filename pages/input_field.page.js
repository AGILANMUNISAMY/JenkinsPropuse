const { expect } = require('@playwright/test');

class EditPage {
  constructor(page) {
    this.page = page;

    this.editLink = page.locator('text=Edit');
    this.userFullName = page.locator('#fullName');
    this.appendText = page.locator('#join');
    this.insideText = page.locator('#getMe');
    this.clearText = page.locator('#clearMe');
    this.confirmEdit = page.locator('#noEdit');
    this.confirmText = page.locator('#dontwrite');
  }

  async openEditPage() {
    await this.page.goto('https://letcode.in/test');
  }

  async clickEditOption() {
    await this.editLink.click();
  }

  async enterUserName(name) {
    await this.userFullName.fill(name);
    await expect(this.userFullName).toHaveValue(name);
  }

  async appendTextAndPressTab(text) {
    await this.appendText.type(text);
    await this.appendText.press('Tab');
  }

  async insideTheTextBox() {
    return await this.insideText.getAttribute('value');
  }

  async clearTheText() {
    await this.clearText.clear();
    await expect(this.clearText).toHaveValue('');
  }

  async confirmEditFieldDisabled() {
    return await this.confirmEdit.isDisabled();
  }

  async confirmTextReadonly() {
    return (await this.confirmText.getAttribute('readonly')) !== null;
  }
}

module.exports = { EditPage };