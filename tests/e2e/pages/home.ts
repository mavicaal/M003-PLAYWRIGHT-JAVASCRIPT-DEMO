import { expect, Locator } from '@playwright/test';
import { pageFixture } from '../fixture';
import { validatesButtonIsVisible, validateUrlContainsText } from '../utils';

const pageUrl: string =
  'https://www.globalsqa.com/angularJs-protractor/BankingProject/';

class HomePage {
  private bankLabel: Locator | null;
  private url: string | undefined;

  constructor() {
    this.bankLabel = null;
  }

  async goToHomePage() {
    await pageFixture.page.goto(pageUrl);
  }

  async validateHomePageIsRendered() {
    this.bankLabel = await pageFixture.page.locator('div :text-is("XYZ Bank")');
    this.url = await pageFixture.page.url();
    await validatesButtonIsVisible('Customer Login');
    await validatesButtonIsVisible('Bank Manager Login');
    await validatesButtonIsVisible('Home');
    await expect(this.bankLabel).toBeVisible();
    await validateUrlContainsText('login');
  }
}

export default HomePage;
