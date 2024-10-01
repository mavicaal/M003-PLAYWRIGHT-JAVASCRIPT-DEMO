import { Given, When, Then } from '@cucumber/cucumber';

Given('User goes to XYZ Bank Home page', async () => {
  await (global as any).home.goToHomePage();
});

Then('Home page is rendered successfully', async () => {
  await (global as any).home.validateHomePageIsRendered();
});
