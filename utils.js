import { expect } from "@playwright/test";

async function getBtnByLabel(page,label){
    btn =  await page.getByRole('button', { name: label });
    // btn = await page.locator(`button:text-is("${label}")`);
    return btn;
}

async function validateUrlContainsText(page,text){
    url = await page.url();
    await expect (url).toContain(text);
}

module.exports = {
    getBtnByLabel,
    validateUrlContainsText
}