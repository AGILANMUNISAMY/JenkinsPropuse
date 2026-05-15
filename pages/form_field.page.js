class FormPage {
    constructor(page) {
        this.page = page;

        // ───────────── Basic fields ─────────────
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lasttname'); // site typo
        this.email = page.locator('#email');

        // ───────────── Country code ─────────────
        this.countryCode = page
            .locator('label', { hasText: 'Country code' })
            .locator('xpath=following-sibling::div//select');

        // ───────────── Phone ─────────────
        this.phone = page
            .locator('label', { hasText: 'Phone Number' })
            .locator('xpath=following-sibling::div//input');

        // ───────────── Address ─────────────
        this.addressLine1 = page
            .locator('label', { hasText: 'Address Line' })
            .first()
            .locator('xpath=following-sibling::div//input');

        this.addressLine2 = page
            .locator('label', { hasText: 'Address Line' })
            .nth(1)
            .locator('xpath=following-sibling::div//input');

        this.state = page.locator('#state');
        this.postalCode = page.locator('#postalcode');

        // ───────────── Country ─────────────
        this.country = page
            .locator('label', { hasText: /^Country$/ })
            .locator('xpath=following-sibling::div//select');

        // ───────────── DOB ─────────────
        this.dob = page.locator('input[type="date"]');

        // ───────────── Gender ─────────────
        this.genderMale = page.getByRole('radio', { name: 'Male', exact: true });
        this.genderFemale = page.getByRole('radio', { name: 'Female', exact: true });

        // ───────────── Terms & Submit ─────────────
        this.termsCheckbox = page.getByRole('checkbox');
        this.submitButton = page.locator('#submit');
    }

    // ───────────── Page navigation ─────────────
    async openFormPage() {
        await this.page.goto('https://letcode.in/forms', {
            waitUntil: 'domcontentloaded',
        });
        await this.firstName.waitFor({ state: 'visible' });
    }

    // ───────────── Actions ─────────────
    async enterFirstName(value) {
        await this.firstName.fill(value);
    }

    async enterLastName(value) {
        await this.lastName.fill(value);
    }

    async enterEmail(value) {
        await this.email.fill(value);
    }

    async selectCountryCode(value) {
        await this.countryCode.selectOption(value.replace('+', ''));
    }

    async enterPhoneNumber(value) {
        await this.phone.fill(value);
    }

    async enterAddressLine1(value) {
        await this.addressLine1.fill(value);
    }

    async enterAddressLine2(value) {
        await this.addressLine2.fill(value);
    }

    async enterState(value) {
        await this.state.fill(value);
    }

    async enterPostalCode(value) {
        await this.postalCode.fill(value);
    }

    async selectCountry(value) {
        await this.country.selectOption({ label: value });
    }

    async selectDOB(value) {
        const [day, month, year] = value.split('-');
        await this.dob.fill(`${year}-${month}-${day}`);
    }

    async selectGender(gender) {
        if (gender.toLowerCase() === 'male') {
            await this.genderMale.check();
        } else {
            await this.genderFemale.check();
        }
    }

    async acceptTerms() {
        if (!(await this.termsCheckbox.isChecked())) {
            await this.termsCheckbox.check();
        }
    }

    // ✅ FIXED SUBMIT (no navigation wait)
    async submitForm() {
    // Ensure the button exists
    await this.submitButton.waitFor({ state: 'attached' });

    // Scroll into viewport
    await this.submitButton.scrollIntoViewIfNeeded();

    // Ensure it is visible
    await this.submitButton.waitFor({ state: 'visible' });

    // Click
    await this.submitButton.click({ timeout: 10000 });

    // ✅ LetCode confirmation = form reset
    await this.page.waitForFunction(() => {
        return document.querySelector('#firstname')?.value === '';
    });
}

}

module.exports = { FormPage };