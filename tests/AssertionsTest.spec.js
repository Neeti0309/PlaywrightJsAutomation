const {test, expect}=require("@playwright/test")

test('AssertionsTest', async ({page})=>{

    //open app URL
    await page.goto('https://demo.nopcommerce.com/')

    //1. expect (page).toHaveURL()                   Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/')

    //2. expect (page).toHaveTitle()                   Page has Title
    await expect (page).toHaveTitle('nopCommerce demo store. Home page title')

    //3. expect (locator).toBeVisible()                 Element is visible
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4. expect (locator).toBeEnabled()                 Control is Enabled
     const StoreSearchBox=await page.locator('#small-searchterms')
     await expect(StoreSearchBox).toBeEnabled()

    //5. expect (locator).toBeChecked()                 Radio/Checkbox is checked

    //Radio Button
    const maleRadioButton=await page.locator('#gender-male')
    await maleRadioButton.click()   //Select Radio Button
    await expect(maleRadioButton).toBeChecked()

    //CheckBox
    const NewsletterCheckbox=await page.locator('#Newsletter')
    await expect(NewsletterCheckbox).toBeChecked()

    //6. expect (locator).toHaveAttribute()                 Element has attribute
    const RegisterButton=await page.locator('#register-button')
    await expect(RegisterButton).toHaveAttribute('type', 'submit')

    //7. expect (locator).toHaveText()                 Element matches text
    const title=await page.locator('.page-title h1')
    await expect(title).toHaveText('Register')
   
    //8. expect (locator).toContainText                 Element contains text(we can put partially text)
    await expect (await page.locator('.page-title h1')).toContainText('Reg')

    //9. expect (locator).toHaveValue(value)            Input has a value
    const emailInput=await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //10. expect (locator).toHaveCount()                List of element has given length
    const options=await page.locator('select[@id="customerCurrency"] option')
    await expect (options).toHaveCount(2)
})