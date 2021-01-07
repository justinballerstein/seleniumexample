const {By} = require('selenium-webdriver');
let fs = require('fs');

describe("Halfaker.com", function(){

    it("should take a screenshot", async function() {
        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(2000);

        let bodySelector = 'body';

        let body = await this.driver.findElement(By.css(bodySelector));
        let encodedString = await body.takeScreenshot(true);
        await fs.writeFileSync('./spec/screenshots/image_logo.png', encodedString, 'base64');
    });


});