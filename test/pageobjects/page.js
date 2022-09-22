module.exports = class Page {

    get url () {
        return 'https://opensource-demo.orangehrmlive.com/';
    }
  
    open (path) {
        return browser.url(this.url + path);
    }
    
    async maximizeWindow () {
        await browser.maximizeWindow();
    }

    async checkUrl (path) {
        await expect(browser).toHaveUrl(this.url + path);
    }
}
