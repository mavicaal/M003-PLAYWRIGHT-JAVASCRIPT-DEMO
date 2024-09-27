import { expect } from "@playwright/test";
import { Page, Locator } from '@playwright/test';

async function getBtnByLabel(page: Page, label: string): Promise<Locator> {
    const btn: Locator = await page.getByRole('button', { name: label });
    return btn;
}

async function validateUrlContainsText(page: Page, text: string): Promise<void> {
    const url: string = await page.url();
    await expect(url).toContain(text);
}

export {
    getBtnByLabel,
    validateUrlContainsText
}