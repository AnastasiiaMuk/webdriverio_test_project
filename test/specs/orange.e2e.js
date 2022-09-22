const { assert } = require("chai");
var chai = require("chai");
const LoginPage = require("../pageobjects/login.page.js");
const UsersPage = require("../pageobjects/users.page.js");
const AddUserPage = require("../pageobjects/add_user.page.js");

describe("opensource-demo page", () => {
  it("Login page", async () => {
    const user = "Anastasiia.Mukhamedshyna" + Math.floor(Math.random() * 1000);
    const role = "ESS";
    const employee = "Odis Adalwin";
    const status = "Enabled";
    const employeeSurname = "Adalwin";
    const password = "aBc-123456789";

    await LoginPage.open();
    await LoginPage.maximizeWindow();
    await LoginPage.login("Admin", "admin123");

    await UsersPage.open();
    await UsersPage.clickAddButton();

    await AddUserPage.selectDropDown("User Role", role);
    await AddUserPage.selectDropDown("Status", status);
    await AddUserPage.setValueToInput("Employee Name", employeeSurname);
    await AddUserPage.selectAutocompleteDropDown("Employee Name", employeeSurname);
    await AddUserPage.setValueToInput("Username", user);
    await AddUserPage.setValueToInput("Password", password);
    await AddUserPage.setValueToInput("Confirm Password", password);
    await AddUserPage.save();

    await UsersPage.checkUrl("web/index.php/admin/viewSystemUsers");
    await UsersPage.search(user);
    await UsersPage.checkUserInGrid(user, role, employee, status);
    await UsersPage.clickResetButton();
    await UsersPage.checkUserInGrid(user, role, employee, status);

    await UsersPage.selectCheckbox(user);
    await UsersPage.deleteSelected();
    await UsersPage.confirmDeletion(user);
  });
});
