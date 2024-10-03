import { When, Then } from '@cucumber/cucumber';
import ManagerPage from '../pages/manager';

const manager = new ManagerPage();

When('User adds new customer', async () => {
  await manager.addCustomer();
});

When('User opens new {string} acount to new user', async (currency: string) => {
  await manager.opensAccountToUser(currency);
});

When('User deletes {string}', async (user: string) => {
  await manager.removesCustomer(user);
});

Then('Manager profile is displayed', async () => {
  await manager.validateManagerPage();
});

Then(
  'Attributes {string} of new user are displayed',
  async (attributes: string) => {
    await manager.newUserIsVisibleInCustomersTable(attributes);
  },
);
