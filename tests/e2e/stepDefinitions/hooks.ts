import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from 'playwright';
import { faker } from '@faker-js/faker';
import HomePage from '../pages/home';
import CustomerPage from '../pages/customer';
import ManagerPage from '../pages/manager';

setDefaultTimeout(65000);

declare global {
    var browser: Browser;
    var context: BrowserContext;
    var page: Page;
    var home: HomePage;
    var customer: CustomerPage;
    var manager: ManagerPage;
    var data: {
        customer: {
            firstName: string;
            lastName: string;
            zipCode: string;
        };
    };
}

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    global.data = {
        customer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            zipCode: faker.location.zipCode()
        }
    }
});

AfterAll(async () => {
    await global.browser.close();
});

Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
    global.home = new HomePage(global.page); 
    global.customer = new CustomerPage(global.page);
    global.manager = new ManagerPage(global.page);
});

After(async function () {
    await global.page.close();
    await global.context.close();
});

