const { test } = require("@playwright/test");
const { ZeptoPage } = require("../");

test('Zepto one-time login', async ({ page }) => {
    const zepto = new ZeptoPage(page);

    await zepto.openZeptoPage();
    await zepto.clickLoginButton();
    await zepto.enterMobileNumber("9345973279");
    await zepto.clickContinueBtn();

    // ✅ YOU manually enter OTP in browser
    await page.waitForTimeout(30000);

    // ✅ Save login session
    await page.context().storageState({ path: 'zeptoAuth.json' });
});