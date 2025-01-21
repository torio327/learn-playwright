import { test, expect } from '@playwright/test';

test('form operation test', async ({ page }) => {
    await page.goto('http://localhost:3000/form');
    await page.getByRole("textbox",{name:/first/}).fill('John')
    await page.getByRole("textbox",{name:/second/}).fill('Tom')
    await page.getByRole("button",{name:/Shuffle/}).click()
    await expect(page.getByRole('status',{name:/Result/})).toHaveText(/(John->Tom)|(Tom->John)/);
})