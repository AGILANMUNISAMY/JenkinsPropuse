const { Given, When, Then } = require("@cucumber/cucumber");
const { DatePickerPage } = require("../pages/DatePicker.page");


Given('user on the date picker wedpage', async function () {
    this.datepickerpage = new DatePickerPage(this.page);
    await this.datepickerpage.openDatePickerPage();

});

When('user click the date picker input', async  function () {
    await this.datepickerpage.clickDateInput();
});

When('user select date {string}',async function (string) {
    await this.datepickerpage.selectDym(Date);

});
Then('check selected date is visible in date picker input',async  function () {
    await this.datepickerpage.verifySelectedDate("24-07-2003");

});