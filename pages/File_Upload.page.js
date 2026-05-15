const { expect } = require("@playwright/test");
const path = require("path");

class FileUpload {
  constructor(page) {
    this.page = page;

    // Instruction texts
    this.text1 = page.locator("p.wp-block-paragraph", {
      hasText: "You may upload a file that meets the following requirements:",
    });
    this.text2 = page.locator("p.wp-block-paragraph", {
      hasText: "Max file size: 1 MB",
    });
    this.text3 = page.locator("p.wp-block-paragraph", {
      hasText: "Supported file types: txt, docx, pdf, jpeg, png, jpg, gif",
    });

    // Elements
    this.fileInput = page.locator("#file-upload");
    this.uploadBtn = page.locator("#upload-btn");
    this.responseMsg = page.locator("#wpcf7-response-output");
  }

  async openfilepage() {
    await this.page.goto(
      "https://practice-automation.com/file-upload/",
      { waitUntil: "domcontentloaded", timeout: 60000 }
    );
  }

  async visiblealltext() {
    await expect(this.text1).toBeVisible();
    await expect(this.text2).toBeVisible();
    await expect(this.text3).toBeVisible();
  }

  async chooseFile() {
    const filePath = path.join(
      __dirname,
      "C:/Users/amunisam/OneDrive - Capgemini/Desktop/WordSpace/package.json"   // update if needed
    );
    await this.fileInput.setInputFiles(filePath);
    await this.uploadBtn.click();
  }

  async verifySuccessMessage() {
    await expect(this.responseMsg).toBeVisible();
    await expect(this.responseMsg).toContainText("Thank you");
  }
}

module.exports = { FileUpload };
``