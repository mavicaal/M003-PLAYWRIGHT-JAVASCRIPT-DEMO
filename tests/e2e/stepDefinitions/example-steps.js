const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require("@playwright/test")


Given('Go to login', async () => {
    await page.goto('https://playwright.dev/');

     // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

     // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})

Then('It is found',async () => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
})
