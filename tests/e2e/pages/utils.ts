import { Page, Locator, expect } from '@playwright/test';

class Utils {
  private page: Page;
  private btn: Locator | null;
  private url: string | null;

  constructor(page: Page) {
    this.page = page;
    this.btn = null;
    this.url = null;
  }

  async getBtnByLabel(label: string) {
    this.btn = await this.page.getByRole('button', { name: label });
    return this.btn;
  }

  async clicksButton(name: string) {
    this.btn = await this.getBtnByLabel(name);
    await this.btn.click();
  }

  async validatesButtonIsVisible(name: string) {
    this.btn = await this.getBtnByLabel(name);
    await expect(this.btn).toBeVisible();
  }

  async validateUrlContainsText(text: string) {
    this.url = await this.page.url();
    await expect(this.url).toContain(text);
  }
}

export default Utils;
