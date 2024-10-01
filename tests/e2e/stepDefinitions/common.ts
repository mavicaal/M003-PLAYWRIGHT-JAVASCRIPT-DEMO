import { Given, When, Then } from '@cucumber/cucumber';

When('User clicks on {string} button', async (buttonName: string) => {
  await (global as any).utils.clicksButton(buttonName);
});
