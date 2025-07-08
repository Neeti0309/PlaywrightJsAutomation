// export the class for import the same class for use
exports.LoginPage = 
class LoginPage {  // class define
   
    //contructor having all the attributes of the elements
    constructor(page) {
      this.page = page;
      this.loginLink="#login2"
      this.usernameInput = '#loginusername';
      this.passwordInput = '#loginpassword';
      this.loginButton = '//button[normalize-space()="Log in"]';
    }
  
    //here we call the open the page method - to open the website page
    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }
  
    ////here we call the login method to login 
    async login(username, password) {
     await this.page.locator(this.loginLink).click();
     await this.page.locator(this.usernameInput).fill(username);
     await this.page.locator(this.passwordInput).fill(password);
     await this.page.locator(this.loginButton).click();
     
    }
  }