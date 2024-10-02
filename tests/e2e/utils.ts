import { Page, Locator, expect } from '@playwright/test';
import { pageFixture } from './fixture';

let btn: Locator;

export async function getBtnByLabel(label: string) {
  btn = await pageFixture.page.getByRole('button', { name: label });
  return btn;
}

export async function clicksButton(name: string) {
  btn = await getBtnByLabel(name);
  btn.click();
}

export async function validatesButtonIsVisible(name: string) {
  btn = await getBtnByLabel(name);
  await expect(btn).toBeVisible();
}

export async function validateUrlContainsText(text: string) {
  let url: string = await pageFixture.page.url();
  await expect(url).toContain(text);
}
