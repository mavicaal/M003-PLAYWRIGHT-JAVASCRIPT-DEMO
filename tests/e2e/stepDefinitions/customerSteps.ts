import { When, Then } from '@cucumber/cucumber';

When('Customer logs in with {string}', async (user: string) => {
    await (global as any).customer.chooseUserFromDropDown(user);
    await (global as any).customer.clickOnLoginButton();
})

Then('{string} account is displayed',async (user: string) => {
    await (global as any).customer.validateUserAccountProfile(user);
})