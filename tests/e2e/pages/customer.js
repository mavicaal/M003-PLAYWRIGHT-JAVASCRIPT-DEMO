const { expect } = require("@playwright/test")
const { getBtnByLabel, validateUrlContainsText } = require('../../../utils');

class CustomerPage {
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

    async validateUserAccountProfile(user){
        //TODO: This could cause flaky test. Need a review
        this.accountWelcomeLabel = await page.getByText(user);
        this.transactionsBtn = await getBtnByLabel(this.page,"Transactions");
        this.depositBtn = await getBtnByLabel(this.page,"Deposit");
        this.withdrawlBtn = await getBtnByLabel(this.page,"Withdrawl");
        await expect (this.accountWelcomeLabel).toBeVisible();
        await expect (this.transactionsBtn).toBeVisible();
        await expect (this.depositBtn).toBeVisible();
        await expect (this.withdrawlBtn).toBeVisible();
        await validateUrlContainsText(page,'account');
    }
}

module.exports = CustomerPage;
