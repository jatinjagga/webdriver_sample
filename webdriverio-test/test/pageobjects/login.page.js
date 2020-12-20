const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */

    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#pass') }
    get btnSubmit () { return $('button[title="Login"]') }
    get errMsg () { return $('//li[@class="error-msg"]/ul/li/span') }
    get linkAccount () { return $('//a[@data-target-element="#header-account"]') }

       


    
 
 home ()
    {
        const homeURL = "http://ctqatest.biz/ecom"                                           
        
       
          browser.url(homeURL);                                     //  navigate t the home url
        expect(browser).toHaveTitle('Madison Island');                 
        console.log("home funtion ....................................................................................................................1223")
        

    } 


    loginError (username,password,msg) {

       console.log("account funtion ....................................................................................................................1223")
                                  // go to the account section
      this.linkAccount.click();
        expect(browser).toHaveTitleContaining('Customer');                         


    this.inputUsername.setValue(username);                           // enter the  email id
    this.inputPassword.setValue(password);                           //  enter the password 
    this.btnSubmit.click();                                          //  enter login button


    let error = this.errMsg.getText();                             // get the text of error msg area
    console.log("errorrrrrrrrrrrrrrrrrrrrrrrr......................................................................................................12233")
    console.log(error);
    console.log(msg);
     expect(error).toEqual(msg)
      
 
    }


}

module.exports = new LoginPage();
