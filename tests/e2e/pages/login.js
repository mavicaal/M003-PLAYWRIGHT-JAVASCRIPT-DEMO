const { expect } = require("@playwright/test")
const { getBtnByLabel } = require('../../../utils');

class LoginPage {
    constructor(page){
        this.page = page;
        this.customerLoginBtn = null;
        this.bankManagerLoginBtn = null;
        this.userSelector = null;
        this.loginBtn = null;
        this.url = null;
    }

    async chooseUserFromDropDown(user){
        this.userSelector = await this.page.locator('#userSelect');
        await this.userSelector.selectOption({label: user});
    }

    async clickOnLoginButton(){
        this.loginBtn = await getBtnByLabel(this.page,"Login");
        await this.loginBtn.click();
    }
}

module.exports = LoginPage;
