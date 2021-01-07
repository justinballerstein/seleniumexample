const {By} = require('selenium-webdriver');

describe("Halfaker.com", function(){

    xit("should get the css value of a web element", async function() {
        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(2000);
        let HALFAKER_COLORS = {};
        HALFAKER_COLORS.ACCENT_COLOR = 'rgba(147, 15, 45, 1)';
        
        let elementLearnMoreSelector = 'a[title="Learn more about Halfaker"]';

        let learnMoreButton = await this.driver.findElement(By.css(elementLearnMoreSelector));
        let learnMoreBackgroundColor = await learnMoreButton.getCssValue('background-color');
        
        expect(HALFAKER_COLORS.ACCENT_COLOR).toEqual(learnMoreBackgroundColor);

    });


});