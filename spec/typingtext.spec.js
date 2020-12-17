const {By} = require('selenium-webdriver');

describe("Halfaker.com", function(){

    xit("should type text in the text box", async function() {
        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(2000);

        let elementContactUsLinkSelector = 'a[title="Contact Us"]';

        let contactUsLink = await this.driver.findElement(By.css(elementContactUsLinkSelector));
        await contactUsLink.click();
        await this.driver.sleep(5000);

        let elementSendButtonSelector = 'input[value="Send"]';
        let send = await this.driver.findElement(By.css(elementSendButtonSelector));
        await this.driver.actions().move({origin:send}).perform();

        let elementYourMessageTextSelector = 'textarea[name="your-message"]';
        let yourMessage = await this.driver.findElement(By.css(elementYourMessageTextSelector));
        await yourMessage.sendKeys('Hello World');
        
        await this.driver.sleep(10000);

    });

});