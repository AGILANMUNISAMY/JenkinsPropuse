const { Given, When } = require("@cucumber/cucumber");
const { DownloadPage } = require('../pages/File_download.page');



Given('user on the particular wedsite', async function () {
    this.downloadpage = new DownloadPage(this.page);
    await this.downloadpage.opendownloadpage();

});



When('user are able visible the download button and click the downlad button', async function () {
    await this.downloadpage.downsession();

});



When('check the download files saveAs  in successfully', async function () {
    // happen in background


});
