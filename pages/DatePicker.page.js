const { expect } = require("@playwright/test");

class DatePickerPage {
  constructor(page) {
    this.page = page;
  }

  async openDatePickerPage() {
    await this.page.goto(
      "https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker"
    );

    await this.page.waitForSelector(".demo-frame");
  }

  async clickDateInput() {
    const dateInput = this.page
      .frameLocator(".demo-frame")
      .locator("#datepicker");

    await dateInput.waitFor({ state: "visible" });
    await dateInput.click();
  }

  async selectDym(value) {
    const [day, month, year] = value.split("-");
    this.expectedValue = `${month}/${day}/${year}`;

    const dateInput = this.page
      .frameLocator(".demo-frame")
      .locator("#datepicker");

    await dateInput.fill(this.expectedValue);
  }

  async verifySelectedDate() {
    const dateInput = this.page
      .frameLocator(".demo-frame")
      .locator("#datepicker");

    await expect(dateInput).toHaveValue(this.expectedValue);
  }
}

module.exports = { DatePickerPage };