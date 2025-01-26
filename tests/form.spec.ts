import { test, expect } from '@playwright/test';
// import {Jimp,loadFont} from "jimp";
// import getRepoInfo from "git-repo-info"
// import {SANS_32_BLACK} from "jimp/fonts"
// import dayjs from "dayjs";
// import {join} from "path"


test('form operation test', async ({ page }) => {
    await page.goto('/form');
    await page.getByRole("textbox",{name:/first/}).fill('John')
    await page.getByRole("textbox",{name:/second/}).fill('Tom')
    await page.getByRole("button",{name:/Shuffle/}).click()
    await expect(page.getByRole('status',{name:/Result/})).toHaveText(/(John->Tom)|(Tom->John)/);
})

// test("screen shot",async ({page},testInfo)=>{
//     await page.goto("/form")
//     const buffer=await page.screenshot()
//
//     const image=await Jimp.read(buffer)
//     const font=await loadFont(SANS_32_BLACK)
//     const git=getRepoInfo()
//
//     await image.print(font,0,0,{
//         text:`${git.sha.slice(0,10)}:${dayjs().format('YYYY/MM/DD HH:mm:ss')}`,
//         alignmentX: Jimp.HORIZONTAL_ALIGN_RIGHT,
//         alignmentY:Jimp.VERTICAL_ALIGN_BOTTOM,
//     },image.getWidth(),image.getHeight())
//     await image.write(join(testInfo.outputDir,'screenshot01.png'))
// })