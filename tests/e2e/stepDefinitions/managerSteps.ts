import { Given, When, Then } from '@cucumber/cucumber';

Then('Manager profile is displayed', async () => {
    await manager.validateManagerPage();
});
