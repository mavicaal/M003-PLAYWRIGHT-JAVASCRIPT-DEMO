const { expect } = require("@playwright/test")
const { getBtnByLabel, validateUrlContainsText } = require('../../../utils');

class AccountPage {
    constructor(page){
        this.page = page;
        this.accountWelcomeLabel = null;
        this.transactionsBtn = null;
        this.depositBtn = null;
        this.withdrawlBtn = null;
    }

    async validateUserAccountProfile(user){
        //TODO: This could cause flaky test. Need a review
        this.accountWelcomeLabel = await this.page.locator(`span:has-text("${user}")`);
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

module.exports = AccountPage;