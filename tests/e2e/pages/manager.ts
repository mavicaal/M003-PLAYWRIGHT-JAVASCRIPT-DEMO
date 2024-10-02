import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

class ManagerPage {
  private page: Page;
  private firstNameInput: Locator | null;
  private lastNameInput: Locator | null;
  private postalCodeInput: Locator | null;
  private addCustomerSubmitBtn: Locator | null;
  private firstNameCell: Locator | null;
  private lastNameCell: Locator | null;
  private postalCodeCell: Locator | null;
  private userSelector: Locator | null;
  private currencySelector: Locator | null;
  private accountsCell: Locator | null;
  private url: string | null;

  constructor(page: any) {
    this.page = page;
    this.firstNameInput = null;
    this.lastNameInput = null;
    this.postalCodeInput = null;
    this.addCustomerSubmitBtn = null;
    this.firstNameCell = null;
    this.lastNameCell = null;
    this.postalCodeCell = null;
    this.accountsCell = null;
    this.userSelector = null;
    this.currencySelector = null;
    this.url = null;
  }

  async validateManagerPage() {
    await utils.validatesButtonIsVisible('Add Customer');
    await utils.validatesButtonIsVisible('Open Account');
    await utils.validatesButtonIsVisible('Customers');
    await utils.validateUrlContainsText('manager');
  }

  async addCustomer() {
    this.firstNameInput = await this.page.getByPlaceholder('First Name');
    this.lastNameInput = await this.page.getByPlaceholder('Last Name');
    this.postalCodeInput = await this.page.getByPlaceholder('Post Code');
    this.addCustomerSubmitBtn = await this.page.locator(
      'button[type="submit"]',
    );
    await this.firstNameInput.fill(data.customer.firstName);
    await this.lastNameInput.fill(data.customer.lastName);
    await this.postalCodeInput.fill(data.customer.zipCode);
    await this.addCustomerSubmitBtn.click();
  }

  async newUserIsVisibleInCustomersTable(attributes) {
    let attrsList: Array<string> = await attributes.split(',');
    for (const attr of attrsList) {
      switch (attr) {
        case 'firstName': {
          this.firstNameCell = await this.page.getByRole('cell', {
            name: (global as any).data.customer.firstName,
          });
          await expect(this.firstNameCell).toBeVisible();
          break;
        }
        case 'lastName': {
          this.lastNameCell = await this.page.getByRole('cell', {
            name: (global as any).data.customer.lastName,
          });
          await expect(this.lastNameCell).toBeVisible();
          break;
        }
        case 'postalCode': {
          this.postalCodeCell = await this.page.getByRole('cell', {
            name: (global as any).data.customer.zipCode,
          });
          await expect(this.postalCodeCell).toBeVisible();
          break;
        }
        case 'accounts': {
          this.accountsCell = await this.page
            .getByRole('row', {
              name: `${data.customer.firstName} ${data.customer.lastName} ${data.customer.zipCode}`,
            })
            .getByRole('cell')
            .nth(3);
          break;
        }
        default: {
          throw new Error(`${attr} attribute is not recognized!`);
        }
      }
    }
  }

  async opensAccountToUser(currency) {
    this.userSelector = await this.page.locator('#userSelect');
    await this.userSelector.selectOption({
      label: `${data.customer.firstName} ${data.customer.lastName}`,
    });
    this.currencySelector = await this.page.locator('#currency');
    await this.currencySelector.selectOption(currency);
    await utils.clicksButton('Process');
  }
}

export default ManagerPage;
