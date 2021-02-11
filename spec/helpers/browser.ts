const chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
let fs = require('fs');
import { Builder, Capabilities, By } from 'selenium-webdriver';


const browser = new function() {
    this.driver;
    this.site = 'https://www.halfaker.com/';
    this.waitForPageToLoad = async () => {
        await this.sleep(2000);
    };
    this.fileExists =  (location, uri) => {
        return fs.existsSync(location + uri);
    };
    this.start = async () => {
        this.driver = await new Builder().withCapabilities(Capabilities.chrome()).setChromeOptions(new chrome.Options().headless()).build();
    };
    this.end = async () => {
        this.driver.quit();
    };
    this.get = async (route: string) => {
        await this.driver.get(this.site + route);
        await this.waitForPageToLoad();
    };
    this.click = async (locator: string) => {
        let element = await this.driver.findElement (By.css(locator));
        await element.click();
        await this.waitForPageToLoad();
    };
    this.sleep = async (time: string) => {
        await this.driver.sleep(time);
    };
    this.getTitle = async () => {
        let title = await this.driver.getTitle();
        return title;
    };
    this.takeScreenshot = async (location: string, filename: string) => {
        let body = await this.driver.findElement(By.css('body'));
        let encodedString = await body.takeScreenshot(true);
        await fs.writeFileSync(location + filename, encodedString, 'base64');
    };
    this.browserBig = async() => {
        await this.driver.manage().window().setRect({ width: 1024, height: 3000 });
    };
  };

export {browser}