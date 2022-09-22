const { assert } = require("chai");
var chai = require("chai");

describe("opensource-demo page", () => {
    it("Login page", async () => {
        await browser.url("https://opensource-demo.orangehrmlive.com/");
        await browser.maximizeWindow();
        const username = await $('//input[@name="username"]');
        await username.setValue('Admin');
        // await browser.pause(1000)
        const password = await $('//input[@name="password"]');
        await password.setValue('admin123');
        // await browser.pause(1000)
        const buttonLogin = await $('//button[@type="submit"]');
        await buttonLogin.click();
        // await browser.pause(1000)

        const admin = await $('//a[@href="/web/index.php/admin/viewAdminModule"]');
        await admin.click();
        // await browser.pause(1000);
        const userManagement = await $('//span[@class="oxd-topbar-body-nav-tab-item"]');
        await userManagement.click();
        // await browser.pause(1000);
        const users = await $('//ul[@class="oxd-dropdown-menu"]');
        await users.click();
        await browser.pause(1000);
        const buttonAdd = await $('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]');
        await buttonAdd.click();
        // await browser.pause(1000);




        const userRoleBlock = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="User Role"]/../..');
        const userRoleButton = await userRoleBlock.$('.//div[@class="oxd-select-text--after"]');
        await userRoleButton.click();
        
        const userRoleEss = await userRoleBlock.$('.//*[text()="ESS"]');
        await userRoleEss.click();
        

        const statusBlock = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Status"]/../..');
        const statusButton = await statusBlock.$('.//div[@class="oxd-select-text--after"]');
        await statusButton.click();
        
        const statusEnabled = await statusBlock.$('.//*[text()="Enabled"]');
        await statusEnabled.click();5
    

        const employeeNameBlock = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Employee Name"]/../..//input');
        await employeeNameBlock.setValue('Adalwin')
        await browser.pause(2000);

        user = 'Annna.' + Math.floor(Math.random() * 1000)

        const searchEmployeeName = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Employee Name"]/../..//div[@class="oxd-autocomplete-dropdown --positon-bottom"]//*[contains(text(), "Adalwin")]');
        await searchEmployeeName.click();

        const usernameBlock = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Username"]/../..//input');
        await usernameBlock.setValue(user);

        const passwordBlock = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Password"]/../..//input');
        await passwordBlock.setValue('aBc-123456789');

        const confirmPasswordBlock = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Confirm Password"]/../..//input');
        await confirmPasswordBlock.setValue('aBc-123456789');
        await browser.pause(1000);

        const buttonSave = await $('//button[@type="submit"][text()=" Save "]');
        await buttonSave.click();


        // // Проверка пользователя в сетке
        // await browser.pause(5000);
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        const usernameSearch = await $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Username"]/../../div/input[@class="oxd-input oxd-input--active"]');
        await usernameSearch.setValue(user);
        

        // Search
        const buttonSearch = await $('//button[@type="submit"][text()=" Search "]');
        await buttonSearch.click();

        // Check
        const checkUsername = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[2]/div`)
        await expect(checkUsername).toHaveText(user)
        

        const checkUserRole = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[3]/div`)
        await expect(checkUserRole).toHaveText('ESS')
        

        const checkEmployeeName = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[4]/div`)
        await expect(checkEmployeeName).toHaveText('Odis Adalwin')
        

        const checkStatus = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[5]/div`)
        await expect(checkStatus).toHaveText('Enabled')
        
        // Reset
        const buttonReset = await $('//button[@type="button"][text()=" Reset "]');
        await buttonReset.click();
       

        // Check 2

        await browser.pause(3000);

        const checkUsername2 = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[2]/div`)
        await expect(checkUsername2).toHaveText(user)
        

        const checkUserRole2 = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[3]/div`)
        await expect(checkUserRole2).toHaveText('ESS')
        

        const checkEmployeeName2 = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[4]/div`)
        await expect(checkEmployeeName2).toHaveText('Odis Adalwin')
        

        const checkStatus2 = await $(`(//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//div[@class="oxd-table-cell oxd-padding-cell"])[5]/div`)
        await expect(checkStatus2).toHaveText('Enabled')
        
        // await expect(checkUsername).toHaveText(user)
        // await expect(checkUserRole).toHaveText('ESS')
        // await expect(checkEmployeeName).toHaveText('Odis Adalwin')
        // await expect(checkStatus).toHaveText('Enabled')

        // Delete

        await $(`//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]/../..//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]`).click()

        const buttonDeleteSelected = await $('//button[@type="button"][text()=" Delete Selected "]')
        await buttonDeleteSelected.click()

        const buttonYesDelete = await $('//button[@type="button"][text()=" Yes, Delete "]')
        await buttonYesDelete.click()

        // // Check that user is deleted
       
        await browser.pause(5000);
        const tryToFindRow = await $(`//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]//div[text()="${user}"]`)
        await expect(tryToFindRow).not.toExist()

        await browser.pause(20000);

    })   
})






