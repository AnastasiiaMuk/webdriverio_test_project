const Page = require("./page");

class UsersPage extends Page {
  get adminSection() {
    return $('//a[@href="/web/index.php/admin/viewAdminModule"]');
  }

  get btnUserManagement() {
    return $('//span[@class="oxd-topbar-body-nav-tab-item"]');
  }

  get btnUsers() {
    return $('//ul[@class="oxd-dropdown-menu"]');
  }

  get btnAddUser() {
    return $(
      '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]'
    );
  }

  get usernameSearch() {
    return $(
      '//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div/label[text()="Username"]/../../div/input[@class="oxd-input oxd-input--active"]'
    );
  }

  get btnSearch() {
    return $('//button[@type="submit"][text()=" Search "]');
  }

  get btnReset() {
    return $('//button[@type="button"][text()=" Reset "]');
  }

  userCell(user) {
    return $(
      `//div[@class="orangehrm-container"]//div[@class="oxd-table-row oxd-table-row--with-border"]/div[@class="oxd-table-cell oxd-padding-cell"][2]/div[text()="${user}"]`
    );
  }

  checkbox(user) {
    return this.userCell(user).$(
      './../..//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]'
    );
  }

  get btnDelete() {
    return $('//button[@type="button"][text()=" Delete Selected "]');
  }

  get btnConfirmDelete() {
    return $('//button[@type="button"][text()=" Yes, Delete "]');
  }

  async checkCellValueInUserTable(user, column, value) {
    const cell = await this.userCell(user).$(
      `./../..//div[@class="oxd-table-cell oxd-padding-cell"][${column}]/div`
    );
    await expect(cell).toHaveText(value);
  }

  async checkUserInGrid(user, role, employee, status) {
    await this.checkCellValueInUserTable(user, 2, user);
    await this.checkCellValueInUserTable(user, 3, role);
    await this.checkCellValueInUserTable(user, 4, employee);
    await this.checkCellValueInUserTable(user, 5, status);
  }

  async openDropdown() {
    await this.adminSection.click();
    await this.btnUserManagement.click();
    await this.btnUsers.click();
  }

  async clickAddButton() {
    await this.btnAddUser.click();
  }

  async searchUser(user) {
    await this.usernameSearch.setValue(user);
    await this.btnSearch.click();
  }

  async clickResetButton() {
    await this.btnReset.click();
  }

  async selectUserCheckbox(user) {
    await this.checkbox(user).click();
  }

  async deleteSelectedUser() {
    await this.btnDelete.click();
    await this.btnConfirmDelete.click();
  }

  async confirmUserDeletion(user) {
    await expect(this.userCell(user)).not.toExist();
  }
}

module.exports = new UsersPage();
