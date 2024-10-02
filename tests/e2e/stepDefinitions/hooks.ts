import {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import HomePage from '../pages/home';
import CustomerPage from '../pages/customer';
import ManagerPage from '../pages/manager';
import { pageFixture } from '../fixture';

setDefaultTimeout(65000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

declare global {
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
  browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });
  global.data = {
    customer: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      zipCode: faker.location.zipCode(),
    },
  };
});

AfterAll(async () => {
  await browser.close();
});

Before(async function () {
  context = await browser.newContext({
    ignoreHTTPSErrors: true,
  });
  page = await context.newPage();
  pageFixture.page = page;
  global.customer = new CustomerPage(page);
  global.manager = new ManagerPage(page);
});

After(async function () {
  await page.close();
  await context.close();
});
