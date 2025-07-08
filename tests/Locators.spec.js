// const {page, expect} = require('@playwright/test');
import {test,expect} from '@playwright/test'
import { type } from 'os'

test('Locators', async ({page})=>{
    
    await page.goto("https://demoblaze.com/")

    //click on login button -- by property
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //provide username -- by CSS
    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol')
    //await page.locator.type('#loginusername', 'pavanol')

    //provide password  -- by css
    //await page.locator("input[id='loginpassword']").fill('test@123')
    await page.fill("input[id='loginpassword']", 'test@123')

    //click on lofin button -- By Xpath
    await page.click("//button[normalize-space()='Log in']")

    //verify the logout presence - Xpath
    const logoutlink= await page.locator("//a[normalize-space()='Log out']")

    //assertion
    await expect(logoutlink).toBeVisible();
    
    //close the application
    await page.close()

})