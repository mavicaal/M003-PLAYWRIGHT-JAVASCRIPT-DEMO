const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium } = require('playwright');

setDefaultTimeout(65000);

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
    });
 });

AfterAll(async () => {
    await global.browser.close();
 });

Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
 });
 
 After(async function () {
    await global.page.close();
    await global.context.close();
 });