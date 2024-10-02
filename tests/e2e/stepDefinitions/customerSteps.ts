import { When, Then } from '@cucumber/cucumber';
import { clicksButton } from '../utils';

When('Customer logs in with {string}', async (user: string) => {
  await (global as any).customer.chooseUserFromDropDown(user);
  await clicksButton('Login');
});

Then('{string} account is displayed', async (user: string) => {
  await (global as any).customer.validateUserAccountProfile(user);
});
