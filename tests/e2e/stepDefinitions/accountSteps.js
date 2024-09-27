const {Given, When, Then} = require('@cucumber/cucumber');

Then('{string} account is displayed',async (user) => {
    await account.validateUserAccountProfile(user);
})