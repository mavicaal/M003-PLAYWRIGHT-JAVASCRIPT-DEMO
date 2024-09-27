import { Page } from '@playwright/test';
import { getBtnByLabel, validateUrlContainsText } from '../../../utils';

const pageUrl: string = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/';

class HomePage {
    private page: Page;
    private customerLoginBtn: HTMLElement | null;
    private bankManagerLoginBtn: HTMLElement | null;
    private homeBtn: HTMLElement | null;
    private bankLabel: HTMLElement | null;
    private url: string | undefined;

    constructor(page: Page) {
        this.page = page;
        this.customerLoginBtn = null;
        this.bankManagerLoginBtn = null;
        this.homeBtn = null;
        this.bankLabel = null;
    }

    async goToHomePage(): Promise<void> {
        await this.page.goto(pageUrl);
    }

    async validateHomePageIsRendered(): Promise<void> {
        this.customerLoginBtn = await getBtnByLabel(this.page, "Customer Login");
        this.bankManagerLoginBtn = await getBtnByLabel(this.page, "Bank Manager Login");
        this.homeBtn = await getBtnByLabel(this.page, "Home");
        this.bankLabel = await this.page.locator('div :text-is("XYZ Bank")');
        this.url = await this.page.url();
        await expect(this.customerLoginBtn).toBeVisible();
        await expect(this.bankManagerLoginBtn).toBeVisible();
        await expect(this.homeBtn).toBeVisible();
        await expect(this.bankLabel).toBeVisible();
        await validateUrlContainsText(this.url, 'login');
    }

    async clicksCustomerLoginButton(): Promise<void> {
        this.customerLoginBtn = await getBtnByLabel(this.page, "Customer Login");
        await this.customerLoginBtn.click();
    }

    async clicksBankManagerLoginButton(): Promise<void> {
        this.bankManagerLoginBtn = await getBtnByLabel(this.page, "Bank Manager Login");
        await this.bankManagerLoginBtn.click();
    }
}

export default HomePage;