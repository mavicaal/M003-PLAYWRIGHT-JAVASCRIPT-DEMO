import { Given, When, Then } from '@cucumber/cucumber';

When('User adds new customer', async () => {
    await (global as any).manager.addCustomer();
}) 

When('User opens new acount to new user', async () => {
    
})

Then('Manager profile is displayed', async () => {
    await (global as any).manager.validateManagerPage();
});

Then ('Attributes {string} of new user are displayed', async (attributes:string) => {
    await (global as any).manager.newUserIsVisibleInCustomersTable(attributes);
})

