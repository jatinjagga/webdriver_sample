/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {

  constructor() {
    this.title = 'My Page';
  }


	open(path)
	{

		browser.url(path);
	}



    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    it('should demonstrate the click command', () => {
    const myButton = $('#myButton')
    myButton.click()
    const myText = $('#someText')
    const text = myText.getText()
    assert(text === 'I was clicked') // true
    const AccountLink = $('#myButton')
})
    */

  //  const AccountLink = $('a[data-target-element="#header-account"]')
//console.log(link.getAttribute('href'));


    
}

module.exports = new Page();