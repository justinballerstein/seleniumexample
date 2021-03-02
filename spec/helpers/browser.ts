const chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
let fs = require('fs');
let looksSame = require('looks-same');
import { Builder, Capabilities, By } from 'selenium-webdriver';


const browser = new function() {
    this.driver;
    this.site = 'https://www.halfaker.com/';
    this.waitForPageToLoad = async () => {
        await this.sleep(3000);
    };
    this.fileExists =  (location, uri) => {
        return fs.existsSync(location + uri);
    };
    this.lookTheSame =  async (location, goldenfilename, testfilename, diffilename, pagename, safezones) => {
        let tol = 40
        let result = {difference: false, pagename};
        await looksSame(location + goldenfilename,
             location + testfilename,
             { tolerance:tol }, 
              async function(error, {equal, diffBounds, diffClusters}) {
            if(equal != true) {
              
              console.log(diffClusters);
              let ignoreClusters = true;
                  for (const cluster of diffClusters) {
                    let inASafeZone = false;
                    for (const safezone of safezones) {
                        if ( cluster.left < safezone.left
                            || cluster.top < safezone.top
                            || cluster.right > safezone.right
                            || cluster.bottom > safezone.bottom
                        ) {
                            inASafeZone = true;
                        }
                    }
                    if (!inASafeZone) {
                        ignoreClusters = false;
                    }
                  };
                if (ignoreClusters == false) {
                    result.difference = true;
                await looksSame.createDiff({
                    reference: location + goldenfilename,
                    current: location + testfilename,
                    diff: location + diffilename,
                    tolerance: tol,
                    highlightColor: '#ff00ff', // color to highlight the differences
                }, function(error) {
              });
            };
            };
        });
        return result;
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
        await this.driver.manage().window().setRect({ width: 1920, height: 3000 });
    };
  };

export {browser}