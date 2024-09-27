import { Given, When, Then } from '@cucumber/cucumber';

Given('User goes to XYZ Bank Home page', async () => {
    await (global as any).home.goToHomePage();
});

When('User clicks {string} Login button', async (loginType: string) => {
    if (loginType === "Customer") {
        await (global as any).home.clicksCustomerLoginButton();
    } else if (loginType === "Bank Manager") {
        await (global as any).home.clicksBankManagerLoginButton();
    } else {
        throw new Error('Login type is not recognized!');
    }
});

Then('Home page is rendered successfully', async () => {
    await (global as any).home.validateHomePageIsRendered();
});
