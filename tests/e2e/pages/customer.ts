import { Page, Locator } from '@playwright/test';
import { getBtnByLabel, validateUrlContainsText } from '../../../utils';

class CustomerPage {
    private page: Page;
    private customerLoginBtn: Locator | null;
    private bankManagerLoginBtn: Locator | null;
    private userSelector: Locator | null;
    private loginBtn: Locator | null;
    private accountWelcomeLabel: Locator | null;
    private transactionsBtn: Locator | null;
    private depositBtn: Locator | null;
    private withdrawlBtn: Locator | null;
    private url: string | null;

    constructor(page: Page) {
        this.page = page;
        this.customerLoginBtn = null;
        this.bankManagerLoginBtn = null;
        this.userSelector = null;
        this.loginBtn = null;
        this.url = null;
    }

    async chooseUserFromDropDown(user: string): Promise<void> {
        this.userSelector = await this.page.locator('#userSelect');
        await this.userSelector.selectOption({ label: user });
    }

    async clickOnLoginButton(): Promise<void> {
        this.loginBtn = await getBtnByLabel(this.page, "Login");
        await this.loginBtn.click();
    }

    async validateUserAccountProfile(user: string): Promise<void> {
        this.accountWelcomeLabel = await this.page.getByText(user);
        this.transactionsBtn = await getBtnByLabel(this.page, "Transactions");
        this.depositBtn = await getBtnByLabel(this.page, "Deposit");
        this.withdrawlBtn = await getBtnByLabel(this.page, "Withdrawl");
        await expect(this.accountWelcomeLabel).toBeVisible();
        await expect(this.transactionsBtn).toBeVisible();
        await expect(this.depositBtn).toBeVisible();
        await expect(this.withdrawlBtn).toBeVisible();
        await validateUrlContainsText(this.page, 'account');
    }
}

export default CustomerPage;