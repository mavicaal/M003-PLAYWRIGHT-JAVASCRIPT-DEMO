import { Given, When, Then } from '@cucumber/cucumber';

When('User adds new customer', async () => {
    await (global as any).manager.addCustomer();
}) 

When('User opens new {string} acount to new user', async (currency) => {
    await (global as any).manager.opensAccountToUser(currency);
})

Then('Manager profile is displayed', async () => {
    await (global as any).manager.validateManagerPage();
});

Then ('Attributes {string} of new user are displayed', async (attributes:string) => {
    await (global as any).manager.newUserIsVisibleInCustomersTable(attributes);
})

