const path = require('path');

class DownloadPage {
    constructor(page) {
        this.page = page;
    }

    async opendownloadpage() {
        await this.page.goto(
            'https://practice-automation.com/file-download/',
            { waitUntil: 'domcontentloaded', timeout: 60000 }
        );
    }

    async downsession() {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.click('a[data-downloadurl*="wpdmdl=915"]')
        ]);

        const downloadPath = path.join(
            __dirname,
            'downloads',
            await download.suggestedFilename()
        );

        await download.saveAs(downloadPath);
    }
}

module.exports = { DownloadPage };