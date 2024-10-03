import { When, Then } from '@cucumber/cucumber';
import { clicksButton } from '../utils';

import CustomerPage from '../pages/customer';

const customer = new CustomerPage();

When('Customer logs in with {string}', async (user: string) => {
  await customer.chooseUserFromDropDown(user);
  await clicksButton('Login');
});

Then('{string} option is not displayed', async (user: string) => {
  await customer.validateUserDoesNotExistInLogin(user);
});

Then('{string} account is displayed', async (user: string) => {
  await customer.validateUserAccountProfile(user);
});
