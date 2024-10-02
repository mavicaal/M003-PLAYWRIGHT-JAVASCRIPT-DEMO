import { When } from '@cucumber/cucumber';
import { clicksButton } from '../utils';

When('User clicks on {string} button', async (buttonName: string) => {
  await clicksButton(buttonName);
});
