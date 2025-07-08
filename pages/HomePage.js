exports.HomePage = class HomePage {
   
    constructor(page) {
      this.page = page;
      this.productList= '//*[@id="tbodyid"]/div/div/div/h4/a';
      this.addToCartbtn='//a[normalize-space()="Add to cart"]';
      this.cart='#cartur'
     }

     //find the products and added to the cart
    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
         for (const product of productList) {
             if (productName === await product.textContent()) {
                await product.click()
                break;
                }
           }
          await this.page.on('dialog', async dialog=>{      //after added the product we got the dialog box 
            if(dialog.message().includes('added')){
            await dialog.accept(); 
           }
          })
          await this.page.locator(this.addToCartbtn).click(); 
    }

    async gotoCart() {                                      //cart page
        await this.page.locator(this.cart).click();
       }

}