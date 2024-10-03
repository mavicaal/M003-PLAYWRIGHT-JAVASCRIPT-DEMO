import { Locator, expect } from '@playwright/test';
import { pageFixture } from './fixture';

let btn: Locator;

export async function retryGoTo(url: string, max: number) {
  let retries: number = 1;
  while (retries <= max) {
    try {
      await pageFixture.page.goto(url);
      return;
    } catch (error) {
      retries += 1;
      if (error instanceof Error) console.error(error.message);
      console.warn(
        `Navigation to ${url} failed. Retrying ${retries} times, Max Retries ${max}`,
      );
    }
  }
}

export async function getBtnByLabel(label: string) {
  btn = await pageFixture.page.getByRole('button', { name: label });
  return btn;
}

export async function clicksButton(name: string) {
  btn = await getBtnByLabel(name);
  await btn.click();
}

export async function validatesButtonIsVisible(name: string) {
  btn = await getBtnByLabel(name);
  await expect(btn).toBeEnabled();
  await expect(btn).toBeVisible();
}

export async function validateUrlContainsText(text: string) {
  const url: string = await pageFixture.page.url();
  await expect(url).toContain(text);
}
