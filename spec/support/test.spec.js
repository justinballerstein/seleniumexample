const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

describe("do the thing", function(){

    beforeAll(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
    });

    it("should do what I like", async function() {
        let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
        await driver.get('http://www.halfaker.com');
        await driver.sleep(10000);
        let LearnMore = await driver.findElement (By.css('a[href="https://www.halfaker.com/covid-19-statement/"]'));
        await LearnMore.click();
        await driver.sleep(10000);
        await driver.quit();
    });

});