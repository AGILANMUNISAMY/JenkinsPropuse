const { expect } = require('@playwright/test');

class RadioPage {
  constructor(page) {
    this.page = page;
  }

  async openPage() {
    await this.page.goto(
      'https://rahulshettyacademy.com/AutomationPractice/',
      {
        waitUntil: 'domcontentloaded',
      }
    );
  }

  //  Radio Buttons   
  async selectRadioButtons() {
    const radios = ['radio1', 'radio2', 'radio3'];

    for (const radio of radios) {
      const radioLocator = this.page.locator(`input[value="${radio}"]`);
      await radioLocator.check();
      await expect(radioLocator).toBeChecked();
    }
  }
 // Auto Suggession
  async autosuggession(){
    await this.page.fill('#autocomplete','ind');

     await this.page.click('.ui-menu-item div:text-is("India")');

     await expect(this.page.locator('#autocomplete')).toHaveValue('India');
  }

  //  Dropdown
  async selectDropdown() {
    const dropdownLocator = this.page.locator('#dropdown-class-example');
    const options = ['option1', 'option2', 'option3'];

    for (const option of options) {
      await dropdownLocator.selectOption(option);
      await expect(dropdownLocator).toHaveValue(option);
    }
  }

  //  Checkboxes
  async selectCheckBoxes() {
    const checkboxes = [
      '#checkBoxOption1',
      '#checkBoxOption2',
      '#checkBoxOption3',
    ];

    for (const checkbox of checkboxes) {
      const checkboxLocator = this.page.locator(checkbox);
      await checkboxLocator.check();
      await expect(checkboxLocator).toBeChecked();
    }
  }

}

module.exports = { RadioPage };