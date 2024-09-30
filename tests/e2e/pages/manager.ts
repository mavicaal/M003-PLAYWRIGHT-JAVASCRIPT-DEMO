import { expect, Locator } from "@playwright/test";
import { getBtnByLabel, validateUrlContainsText } from '../../../utils';
import { Page } from 'playwright';

class ManagerPage {
    private page: Page;
    private addCustomerLoginBtn: Locator | null;
    private openAccountBtn: Locator | null;
    private customersBtn: Locator | null;
    private firstNameInput: Locator | null;
    private lastNameInput: Locator | null;
    private postalCodeInput: Locator | null;
    private addCustomerSubmitBtn: Locator | null;
    private firstNameCell: Locator | null;
    private lastNameCell: Locator | null;
    private postalCodeCell: Locator | null;
    private url: string | null;

    constructor(page: any) {
        this.page = page;
        this.addCustomerLoginBtn = null;
        this.openAccountBtn = null;
        this.customersBtn = null;
        this.firstNameInput = null;
        this.lastNameInput = null;
        this.postalCodeInput = null;
        this.addCustomerSubmitBtn = null;
        this.firstNameCell = null;
        this.lastNameCell = null;
        this.postalCodeCell = null;
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

    async clicksAddCustomerBtn(){
        this.addCustomerLoginBtn = await getBtnByLabel(this.page, "Add Customer");
        await this.addCustomerLoginBtn.click();
    }

    async clicksCustomersBtn(){
        this.customersBtn = await getBtnByLabel(this.page, "Customers");
        await this.customersBtn.click();
    }

    async addCustomer(){
        this.firstNameInput = await this.page.getByPlaceholder('First Name');
        this.lastNameInput = await this.page.getByPlaceholder('Last Name');
        this.postalCodeInput = await this.page.getByPlaceholder('Post Code');
        this.addCustomerSubmitBtn = await this.page.locator('button[type="submit"]');
        await this.firstNameInput.fill((global as any).data.customer.firstName);
        await this.lastNameInput.fill((global as any).data.customer.lastName);
        await this.postalCodeInput.fill((global as any).data.customer.zipCode);
        await this.addCustomerSubmitBtn.click();
    }

    async newUserIsVisibleInCustomersTable(attributes){
        let attrsList: Array<string> =  await attributes.split(",");
        for (const attr of attrsList){
            switch(attr) { 
                case "firstName": { 
                   this.firstNameCell =  await page.getByRole('cell', { name: (global as any).data.customer.firstName });
                   await expect(this.firstNameCell).toBeVisible();
                   break; 
                } 
                case "lastName": { 
                   this.lastNameCell =  await page.getByRole('cell', { name: (global as any).data.customer.lastName });
                   await expect(this.lastNameCell).toBeVisible();
                   break; 
                } 
                case "postalCode": {
                   this.postalCodeCell =  await page.getByRole('cell', { name: (global as any).data.customer.zipCode });
                   await expect(this.postalCodeCell).toBeVisible();
                   break;    
                } 
                case "accounts": { 
                   break; 
                }  
                default: { 
                    throw new Error(`${attr} attribute is not recognized!`);
                } 
             }
        }
    }
}

export default ManagerPage;

