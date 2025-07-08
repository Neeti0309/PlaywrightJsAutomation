const { test, expect } = require("@playwright/test")

test ('Built_inLocators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//page.getByAltText() --- to locate an element, usually image, by its text alternative.
    const logo=await page.getByAltText('company-branding')  
    await expect(logo).toBeVisible();

//page.getByPlaceholder() --- to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

//page.getByRole() --- to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button',{type: 'submit'}).click()

//page.getByText() ---to locate by text content. (for find the multiple text content we have to use by Xpath and CSS to 
// find the element.)
//--For specific user name find in page --- USE AS ASSERTION
   await expect (await page.getByText('karthi user')).toBeVisible();

//For random user name text find in page ---
    const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(name)).toBeVisible()
    console.log('username:', name);
})