const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require("@playwright/test");

When('Customer logs in with {string}', async (user) => {
    await login.chooseUserFromDropDown(user);
    await login.clickOnLoginButton();
})