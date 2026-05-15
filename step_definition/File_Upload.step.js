const { Given, When, Then } = require("@cucumber/cucumber");
const { FileUpload } = require("../pages/File_Upload.page");

Given("the user is on the file upload page", async function () {
  this.fileUpload = new FileUpload(this.page);
  await this.fileUpload.openfilepage();
});

When("the user sees the file upload instructions", async function () {
  await this.fileUpload.visiblealltext();
});

When("the user chooses a valid file from the local system", async function () {
  await this.fileUpload.chooseFile();
});

Then("the file should be uploaded successfully", async function () {
  await this.fileUpload.verifySuccessMessage();
});

Then("a success message should be displayed", async function () {
  await this.fileUpload.verifySuccessMessage();
});
