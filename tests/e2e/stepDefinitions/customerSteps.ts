const {Given, When, Then} = require('@cucumber/cucumber');

When('Customer logs in with {string}', async (user: string) => {
    await customer.chooseUserFromDropDown(user);
    await customer.clickOnLoginButton();
})

Then('{string} account is displayed',async (user: string) => {
    await customer.validateUserAccountProfile(user);
})