const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage  {

	 get inputSearch () { return $('#search') }
       get btnCart () { return $('button[title="Add to Cart"]') }
    //   get btnCart () { return $('button[title="Add to Cart"]') }
    get btnSearch () { return $('button[type="submit"][title="Search"]')}


       addtoCart (searchtext,selection,color,size)
    {
console.log("Search ....................................")
 this.inputSearch.setValue(searchtext);                          //  search for example with shirt 
    //   browser.keys(['Enter']);
    this.btnSearch.click();
       expect(browser).toHaveTitleContaining('Search results for');
  
   const shirtLink = $(".//a[@title='"+selection+"']");     //  select the item
  const attr = shirtLink.getAttribute('href')
  console.log(attr);
  browser.url(attr);
  
//     $("#attribute92").selectByVisibleText(color)                 //  choose the color of selected item
 //    $("#attribute180").selectByVisibleText(size)                 //  chosse the size of the selected item
  // this.btnCart.click();                                         //  add item to cart 
  
    }

}

module.exports = new CartPage();


