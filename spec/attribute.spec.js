const {By} = require('selenium-webdriver');

describe("Halfaker.com", function(){

    it("should get the attribute of a web element", async function() {
        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(2000);
        let expectedLearnMoreLink = 'https://www.halfaker.com/our-story/';
        let elementLearnMoreSelector = 'a[title="Learn more about Halfaker"]';

        let learnMoreButton = await this.driver.findElement(By.css(elementLearnMoreSelector));
        let hrefLink = await learnMoreButton.getAttribute('href');
        
        expect(expectedLearnMoreLink).toEqual(hrefLink);

    });

    it("should spell Ken's name correctly on the image tag", async function() {
        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(2000);
        let expectedDescription = 'Portrait of Ken Georgi';
        let kenPortraitCSS = 'a[aria-label="Ken GeorgiChief Operating Officer"] img';

        let kenPortrait = await this.driver.findElement(By.css(kenPortraitCSS));
        let description = await kenPortrait.getAttribute('alt');
        
        expect(expectedDescription).toEqual(description);

    });

});