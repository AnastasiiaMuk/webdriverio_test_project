const LoginPage = require("../pageobjects/login.page.js");
const UsersPage = require("../pageobjects/users.page.js");
const AddUserPage = require("../pageobjects/add_user.page.js");

describe("Login, create user, delete user and verify that user is deleted", () => {
  const user = "Anastasiia.Mukhamedshyna" + Math.floor(Math.random() * 1000);
  const role = "ESS";
  const employee = "Odis Adalwin";
  const status = "Enabled";
  const employeeSurname = "Adalwin";
  const password = "aBc-123456789";

  it("Login", async () => {
    await LoginPage.open();
    await LoginPage.maximizeWindow();
    await LoginPage.login("Admin", "admin123");
  });

  it("Create user and verify that user is created", async () => {
    await UsersPage.openDropdown();
    await UsersPage.clickAddButton();
    await AddUserPage.selectDropDown("User Role", role);
    await AddUserPage.selectDropDown("Status", status);
    await AddUserPage.setValueToInput("Employee Name", employeeSurname);
    await AddUserPage.selectAutocompleteDropDown("Employee Name", employeeSurname);
    await AddUserPage.setValueToInput("Username", user);
    await AddUserPage.setValueToInput("Password", password);
    await AddUserPage.setValueToInput("Confirm Password", password);
    await AddUserPage.saveUser();
    await UsersPage.checkUrl("web/index.php/admin/viewSystemUsers");
    await UsersPage.searchUser(user);
    await UsersPage.checkUserInGrid(user, role, employee, status);
    await UsersPage.clickResetButton();
    await UsersPage.checkUserInGrid(user, role, employee, status);
  });

  it("Delete user and verify that user is deleted", async () => {
    await UsersPage.selectUserCheckbox(user);
    await UsersPage.deleteSelectedUser();
    await UsersPage.confirmUserDeletion(user);
  });
});
