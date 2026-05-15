const { expect } = require("@playwright/test");

class RegisterPage {
  constructor(page) {
    this.page = page;

    this.fname = page.locator("#first_name");
    this.lname = page.locator("#last_name");
    this.dob = page.locator("#dob");

    this.country = page.locator("#country");
    this.postalCode = page.locator("#postal_code");
    this.houseNumber = page.locator("#house_number");
    this.street = page.locator('#street')
    this.city = page.locator("#city");
    this.state = page.locator("#state");

    this.phone = page.locator("#phone");
    this.email = page.locator("#email");
    this.password = page.locator("#password");

    this.registerBtn = page.locator('[data-test="register-submit"]');
    this.allErrors = page.locator(".invalid-feedback");
  }

  async openRegisterPage() {
    await this.page.goto("https://practicesoftwaretesting.com/auth/register");
  }

  async enterFirstName(value) {
    await this.fname.fill(value);
  }

  async enterLastName(value) {
    await this.lname.fill(value);
  }

  async enterDateOfBirth(value) {
    await this.dob.fill(value);
  }

  async selectCountry(value) {
    await this.country.selectOption({ label: value });
  }

  async enterPostalCode(value) {
    await this.postalCode.fill(value);
  }

  async enterHouseNumber(value) {
    await this.houseNumber.fill(value);
  }

  
async enterStreet(value) {
  await this.street.fill(value);
}


  async enterCity(value) {
    await this.city.fill(value);
  }
    
  

  async enterState(value) {
    await this.state.fill(value);
  }

  async enterPhone(value) {
    await this.phone.fill(value);
  }

  async enterEmail(value) {
    await this.email.fill(value);
  }

  async enterPassword(value) {
    await this.password.fill(value);
  }

  async clickRegister() {
    await this.registerBtn.click();
  }

  async verifyErrorMessage(text) {
    await expect(this.allErrors).toContainText(text);
  }

  async verifySuccessNavigation() {
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/auth/register');
  }
}

module.exports = { RegisterPage };