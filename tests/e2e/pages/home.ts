import { Page, expect, Locator } from '@playwright/test';

const pageUrl: string = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/';

class HomePage {
    private page: Page;
    private bankLabel: Locator | null;
    private url: string | undefined;

    constructor(page: Page) {
        this.page = page;
        this.bankLabel = null;
    }

    async goToHomePage() {
        await this.page.goto(pageUrl);
    }

    async validateHomePageIsRendered(){
        this.bankLabel = await this.page.locator('div :text-is("XYZ Bank")');
        this.url = await this.page.url();
        await utils.validatesButtonIsVisible("Customer Login");
        await utils.validatesButtonIsVisible("Bank Manager Login");
        await utils.validatesButtonIsVisible("Home");
        await expect(this.bankLabel).toBeVisible();
        await utils.validateUrlContainsText('login');
    }
}

export default HomePage;