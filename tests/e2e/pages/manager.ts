import { expect } from "@playwright/test";
import { getBtnByLabel, validateUrlContainsText } from '../../../utils';
import { Page } from 'playwright';

class ManagerPage {
    private page: Page;
    private addCustomerLoginBtn: any | null;
    private openAccountBtn: any | null;
    private customersBtn: any | null;
    private firstNameInput: any | null;
    private url: string | null;

    constructor(page: any) {
        this.page = page;
        this.addCustomerLoginBtn = null;
        this.openAccountBtn = null;
        this.customersBtn = null;
        this.firstNameInput = null;
        this.url = null;
    }

    async validateManagerPage() {
        this.addCustomerLoginBtn = await getBtnByLabel(this.page, "Add Customer");
        this.openAccountBtn = await getBtnByLabel(this.page, "Open Account");
        this.customersBtn = await getBtnByLabel(this.page, "Customers");
        await expect(this.addCustomerLoginBtn).toBeVisible();
        await expect(this.openAccountBtn).toBeVisible();
        await expect(this.customersBtn).toBeVisible();
        await validateUrlContainsText(this.page, 'manager');
    }
}

export default ManagerPage;

