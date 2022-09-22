const Page = require('./page');

class AddUserPage extends Page {

    block (title) {
        return $(`//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="${title}"]/../..`);
    }

    btnDropDown (blockTitle) {
        return this.block(blockTitle).$('.//div[@class="oxd-select-text--after"]');
    }

    textInDropDown (blockTitle, textToSelect) {
        return this.block(blockTitle).$(`.//*[text()="${textToSelect}"]`);
    }

    textInAutocompleteDropDown (blockTitle, textToSelect) {
        return this.block(blockTitle).$(`.//div[@class="oxd-autocomplete-dropdown --positon-bottom"]//*[contains(text(), "${textToSelect}")]`);
    }

    get buttonSave () {
        return $('//button[@type="submit"][text()=" Save "]');
    }

    input (blockTitle) {
        return this.block(blockTitle).$('.//input');
    }

    async selectDropDown (blockTitle, textToSelect) {
        await this.btnDropDown(blockTitle).click();
        await this.textInDropDown(blockTitle, textToSelect).click();
    }

    async selectAutocompleteDropDown (blockTitle, textToSelect) {
        await this.textInAutocompleteDropDown(blockTitle, textToSelect).click();
    }

    async setValueToInput (blockTitle, text) {
        await this.input(blockTitle).setValue(text);
    }

    async save () {
        await browser.pause(2000);
        await this.buttonSave.click();
    }
}

module.exports = new AddUserPage();
