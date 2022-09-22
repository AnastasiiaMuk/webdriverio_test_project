const Page = require('./page');

class LoginPage extends Page {
    
    get inputUsername () {
        return $('//input[@name="username"]');
    }

    get inputPassword () {
        return $('//input[@name="password"]');
    }

    get btnSubmit () {
        return $('//button[@type="submit"]');
    }

  
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
