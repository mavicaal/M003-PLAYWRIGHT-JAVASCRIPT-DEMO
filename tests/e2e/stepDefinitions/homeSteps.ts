const {Given, When, Then} = require('@cucumber/cucumber');

Given('User goes to XYZ Bank Home page', async () => {
    await home.goToHomePage();
})

When ('User clicks {string} Login button', async (loginType) => {
    if(loginType == "Customer") await home.clicksCustomerLoginButton();
    else if (loginType == "Bank Manager") await home.clicksBankManagerLoginButton();
    else throw new Error('Login type is not recognized!');
})

Then('Home page is rendered successfully',async () => {
    await home.validateHomePageIsRendered();
})
