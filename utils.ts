 import { Page, Locator, expect } from '@playwright/test';

export async function getBtnByLabel(page: Page, label: string){
    const btn: any = await page.getByRole('button', { name: label });
    return btn;
}

export async function validateUrlContainsText(page: Page, text: string){
    const url: string = await page.url();
    await expect(url).toContain(text);
}