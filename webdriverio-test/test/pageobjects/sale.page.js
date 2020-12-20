
//import Page from './page';
const Page = require('./page');


class SalePage {

get priceFilter () { return $('//span[contains(@id,"product-price")]') }




saleClick ()

    {
        console.log("sale funtion........................................................................." )
      

         const LinkSale = $(".//a[text()='Sale']");     
         const attr = LinkSale.getAttribute('href')
         console.log(attr);
         browser.url(attr);
         
        expect(browser).toHaveTitleContaining('Sale');      // sale page  title validation

     }
     
     salePriceFilter()
     {    
        const linkPrice100 = "100"       

        $("*="+linkPrice100).click();    // Select filter 100-200

let cellData = browser.$$('//span[contains(@id,"product-price")]')     
   cellData.forEach((elem) => {
let price = elem.getText();

  console.log(price)

expect(price.substring(1)>=100 && price.substring(1)<=200).toBeTruthy()   // filter validation  removing the $ from the price and match the constion 

  
  })      
    
    }


}

//export default new SalePage();
module.exports = new SalePage();

