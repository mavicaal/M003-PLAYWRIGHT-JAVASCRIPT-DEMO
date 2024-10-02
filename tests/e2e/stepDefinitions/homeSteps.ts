import { Given, Then } from '@cucumber/cucumber';
import HomePage from '../pages/home';

const home = new HomePage();

Given('User goes to XYZ Bank Home page', async () => {
  await home.goToHomePage();
});

Then('Home page is rendered successfully', async () => {
  await home.validateHomePageIsRendered();
});
