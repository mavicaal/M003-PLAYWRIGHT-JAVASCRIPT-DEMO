const {Given, When, Then} = require('@cucumber/cucumber');

Given('Customer go to XYZ Bank Home page', async () => {
    await home.goToHomePage();
})

When ('Customer clicks Customer Login button', async () => {
    await home.clicksCustomerLoginButton()
})

Then('Home page is rendered successfully',async () => {
    await home.validateHomePageIsRendered();
})
