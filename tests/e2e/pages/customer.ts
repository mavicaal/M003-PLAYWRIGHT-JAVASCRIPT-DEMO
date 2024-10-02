import { Page, Locator, expect } from '@playwright/test';
import { validatesButtonIsVisible, validateUrlContainsText } from '../utils';

class CustomerPage {
  private page: Page;
  private userSelector: Locator | null;
  private accountWelcomeLabel: Locator | null;
  private url: string | null;

  constructor(page: Page) {
    this.page = page;
    this.userSelector = null;
    this.url = null;
  }

  async chooseUserFromDropDown(user: string) {
    this.userSelector = await this.page.locator('#userSelect');
    await this.userSelector.selectOption({ label: user });
  }

  async validateUserAccountProfile(user: string) {
    this.accountWelcomeLabel = await this.page.getByText(user);
    await validatesButtonIsVisible('Transactions');
    await validatesButtonIsVisible('Deposit');
    await validatesButtonIsVisible('Withdrawl');
    await expect(this.accountWelcomeLabel).toBeVisible();
    await validateUrlContainsText('account');
  }
}

export default CustomerPage;
