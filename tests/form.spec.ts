import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole("textbox",{name:/first/}).fill('John')
    await page.getByRole("textbox",{name:/second/}).fill('Tom')
    await page.getByRole("button",{name:/random/}).click()
    await expect(page.getByRole('status',{name:/result/})).toHaveText(/(John->Tom)|(Tom->John)/);
}