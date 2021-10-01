import Page from './page';

class LoginPage extends Page {
  
    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#pass') }
    get btnSubmit () { return $('button[type="submit"]') }

   
    async login (email, pass) {
        await this.inputUsername.setValue(email);
        await this.inputPassword.setValue(pass);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
