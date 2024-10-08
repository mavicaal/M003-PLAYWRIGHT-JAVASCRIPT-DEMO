import { Locator, expect } from '@playwright/test';
import { validatesButtonIsVisible, validateUrlContainsText } from '../utils';
import { pageFixture, dataFixture } from '../fixture';

class CustomerPage {
  private userSelector: Locator | null;
  private accountWelcomeLabel: Locator | null;
  private url: string | null;

  constructor() {
    this.userSelector = null;
    this.url = null;
  }

  async chooseUserFromDropDown(user: string) {
    this.userSelector = await pageFixture.page.locator('#userSelect');
    if (user == 'New User') {
      await this.userSelector.selectOption({
        label: `${dataFixture.customer.firstName} ${dataFixture.customer.lastName}`,
      });
    } else {
      await this.userSelector.selectOption({ label: user });
    }
  }

  async validateUserAccountProfile(user: string) {
    if (user == 'New User') {
      this.accountWelcomeLabel = await pageFixture.page.getByText(
        `${dataFixture.customer.firstName} ${dataFixture.customer.lastName}`,
      );
    } else {
      this.accountWelcomeLabel = await pageFixture.page.getByText(user);
      await validatesButtonIsVisible('Transactions');
      await validatesButtonIsVisible('Deposit');
      await validatesButtonIsVisible('Withdrawl');
    }
    await expect(this.accountWelcomeLabel).toBeVisible();
    await validateUrlContainsText('account');
  }

  async validateUserDoesNotExistInLogin(user: string) {
    this.userSelector = await pageFixture.page.locator('#userSelect');
    let options: string[] = await this.userSelector.allInnerTexts();
    options = options[0].split('\n');
    let flag: boolean = false;
    user =
      user === 'New User'
        ? `${dataFixture.customer.firstName} ${dataFixture.customer.lastName}`
        : user;
    for (const option of options) {
      const text = await option;
      flag = flag || user === text;
    }
    expect(flag).toBe(false);
  }
}

export default CustomerPage;
