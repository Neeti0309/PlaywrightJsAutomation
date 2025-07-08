const {test, expect} = require("@playwright/test")

test('LocatingMultipleElements', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")

//search the multiple link

    /*const links = await page.$$('a');

    for(const link of links)
    {
        const linktext= await link.textContent();
        console.log(linktext);
    }*/

//search the multiple product
    
page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const product= await page.$$("//div[@id='tbodyid']//div//h4//a")
    
    for(const products of product)
    {
       const productName= await product.textContent();
       console.log(productName);
    }


})