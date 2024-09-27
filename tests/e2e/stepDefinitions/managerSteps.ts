import { Given, When, Then } from '@cucumber/cucumber';

Then('Manager profile is displayed', async () => {
    await (global as any).manager.validateManagerPage();
});
