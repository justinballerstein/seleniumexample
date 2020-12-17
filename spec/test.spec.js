const {By} = require('selenium-webdriver');

describe("Halfaker.com", function(){

    xit("should go to the Covid 19 Statement page when we click Learn more", async function() {
        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(2000);
        let LearnMore = await this.driver.findElement (By.css('div.covid-link a'));
        await LearnMore.click();
        await this.driver.sleep(2000);
        let expectedTitle = 'Novel Coronavirus (COVID-19) Statement | Halfaker & Associates, LLC.';
        let actualTitle = await this.driver.getTitle();
        expect(actualTitle).toEqual(expectedTitle);
    });

});