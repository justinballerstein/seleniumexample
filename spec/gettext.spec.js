const {By} = require('selenium-webdriver');

describe("Halfaker.com", function(){

    xit("should get the text of an element", async function() {
        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(5000);

        let expectedText = 'Halfaker’s management team is comprised of industry leaders who are committed to the company’s mission and fundamental values that drive our every day decisions and fuel our growth.';
        let elementSelector = 'div.fusion-text-12 span';

        // Having trouble? check out in pure javascript
        // let element = document.querySelector('div.fusion-text-12 span');
        // element.scrollIntoView();
        // element.style.color = 'red';

        let element = await this.driver.findElement(By.css(elementSelector));
        await this.driver.actions().move({origin:element}).perform();
        let actualText = await element.getText();
        
        await this.driver.sleep(2000);
        
        expect(actualText).toEqual(expectedText);
    });

   

});