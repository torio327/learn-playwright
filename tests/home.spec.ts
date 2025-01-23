import {expect, test} from "playwright/test";

test("page display test",async ({page})=>{
    await page.goto("/");
    await expect(page).toHaveTitle(/first page/);
    await expect(page.getByRole("heading")).toHaveText(/Playwrightのハンズオン/)
    await expect(page.getByRole("button",{name:/操作ボタン/})).toBeVisible()
})