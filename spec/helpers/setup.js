jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;

const chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
const {Builder, By, Capabilities} = require('selenium-webdriver');

beforeAll(async function() {
    this.driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
});

afterAll(async function() {
    await this.driver.quit();
});