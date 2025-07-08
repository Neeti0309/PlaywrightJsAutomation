//Test provides a test function to declare tests 
// expect function to write assertions 
//'async' before a function makes the function return a promise
//'await' before a function makes the function wait for a promise 

const { test, expect } = require('@playwright/test');

test('HomePage', async ({page})=>{

    await page.goto('https://demoblaze.com/');

    const pageTitle=page.title();
    console.log('Page title is:' ,pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL=page.url();
    console.log('Page url is:' ,pageURL);

    await expect(page).toHaveURL('https://demoblaze.com/');

    await page.close();
})