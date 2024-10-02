import { expect, Locator } from '@playwright/test';
import { pageFixture, dataFixture } from '../fixture';
import {
  validatesButtonIsVisible,
  validateUrlContainsText,
  clicksButton,
} from '../utils';

class ManagerPage {
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

  constructor() {
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
    await validatesButtonIsVisible('Add Customer');
    await validatesButtonIsVisible('Open Account');
    await validatesButtonIsVisible('Customers');
    await validateUrlContainsText('manager');
  }

  async addCustomer() {
    this.firstNameInput = await pageFixture.page.getByPlaceholder('First Name');
    this.lastNameInput = await pageFixture.page.getByPlaceholder('Last Name');
    this.postalCodeInput = await pageFixture.page.getByPlaceholder('Post Code');
    this.addCustomerSubmitBtn = await pageFixture.page.locator(
      'button[type="submit"]',
    );
    await this.firstNameInput.fill(dataFixture.customer.firstName);
    await this.lastNameInput.fill(dataFixture.customer.lastName);
    await this.postalCodeInput.fill(dataFixture.customer.zipCode);
    await this.addCustomerSubmitBtn.click();
  }

  async newUserIsVisibleInCustomersTable(attributes) {
    const attrsList: Array<string> = await attributes.split(',');
    for (const attr of attrsList) {
      switch (attr) {
        case 'firstName': {
          this.firstNameCell = await pageFixture.page.getByRole('cell', {
            name: dataFixture.customer.firstName,
          });
          await expect(this.firstNameCell).toBeVisible();
          break;
        }
        case 'lastName': {
          this.lastNameCell = await pageFixture.page.getByRole('cell', {
            name: dataFixture.customer.lastName,
          });
          await expect(this.lastNameCell).toBeVisible();
          break;
        }
        case 'postalCode': {
          this.postalCodeCell = await pageFixture.page.getByRole('cell', {
            name: dataFixture.customer.zipCode,
          });
          await expect(this.postalCodeCell).toBeVisible();
          break;
        }
        case 'accounts': {
          this.accountsCell = await pageFixture.page
            .getByRole('row', {
              name: `${dataFixture.customer.firstName} ${dataFixture.customer.lastName} ${dataFixture.customer.zipCode}`,
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
    this.userSelector = await pageFixture.page.locator('#userSelect');
    await this.userSelector.selectOption({
      label: `${dataFixture.customer.firstName} ${dataFixture.customer.lastName}`,
    });
    this.currencySelector = await pageFixture.page.locator('#currency');
    await this.currencySelector.selectOption(currency);
    await clicksButton('Process');
  }
}

export default ManagerPage;
