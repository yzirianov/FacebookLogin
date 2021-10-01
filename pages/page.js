export default class Page {
  
    open (path) {
        return browser.url(`https:www.facebook.com/${path}`)
    }
}
