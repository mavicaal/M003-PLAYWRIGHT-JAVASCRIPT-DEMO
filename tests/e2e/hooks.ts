import {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { pageFixture } from './fixture';

setDefaultTimeout(65000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });
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
});

After(async function () {
  await page.close();
  await context.close();
});
