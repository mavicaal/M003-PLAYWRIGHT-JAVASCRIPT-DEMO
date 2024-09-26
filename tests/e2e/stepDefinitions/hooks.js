const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require('playwright');
const HomePage = require('../pages/home')
const LoginPage = require('../pages/login')
const AccountPage = require('../pages/account')

setDefaultTimeout(65000);

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        ignoreHTTPSErrors: true,
    });
 });

AfterAll(async () => {
    await global.browser.close();
 });

Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
    global.home = new HomePage(global.page); 
    global.login = new LoginPage(global.page);
    global.account = new AccountPage(global.page);
 });
 
 After(async function () {
    await global.page.close();
    await global.context.close();
 });