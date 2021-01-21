const chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

import { Builder, Capabilities, By } from 'selenium-webdriver';


const browser = new function() {
    this.driver;
    this.waitForPageToLoad = async () => {
        await this.sleep(2000);
    };
    this.start = async () => {
        this.driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    };
    this.end = async () => {
        this.driver.quit();
    };
    this.get = async (url: string) => {
        await this.driver.get(url);
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
  };

export {browser}