const { expect } = require("@playwright/test");
const { getBtnByLabel, validateUrlContainsText } = require('../../../utils');

const pageUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/';

class HomePage {
    constructor(page){
        this.page = page;
        this.customerLoginBtn = null;
        this.bankManagerLoginBtn = null;
        this.homeBtn = null;
        this.bankLabel =  null;
    }

    async goToHomePage(){
        await this.page.goto(pageUrl);
    }

    async validateHomePageIsRendered(){
        this.customerLoginBtn = await getBtnByLabel(this.page,"Customer Login");
        this.bankManagerLoginBtn = await getBtnByLabel(this.page,"Bank Manager Login");
        this.homeBtn = await getBtnByLabel(this.page,"Home");
        this.bankLabel = await this.page.locator('div :text-is("XYZ Bank")');
        this.url = await this.page.url();
        await expect (this.customerLoginBtn).toBeVisible();
        await expect (this.bankManagerLoginBtn).toBeVisible();
        await expect (this.homeBtn).toBeVisible();
        await expect (this.bankLabel).toBeVisible();
        await validateUrlContainsText(page,'login');
    }

    async clicksCustomerLoginButton(){
        this.customerLoginBtn = await getBtnByLabel(this.page,"Customer Login");
        await this.customerLoginBtn.click()
    }

    async clicksBankManagerLoginButton(){
        this.bankManagerLoginBtn = await getBtnByLabel(this.page,"Bank Manager Login");
        await this.bankManagerLoginBtn.click()
    }
}

module.exports = HomePage;

