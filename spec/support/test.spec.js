const {By} = require('selenium-webdriver');

describe("the thing", function(){

    it("should do what I like", async function() {

        await this.driver.get('http://www.halfaker.com');
        await this.driver.sleep(5000);
        let LearnMore = await this.driver.findElement (By.css('a[href="https://www.halfaker.com/covid-19-statement/"]'));
        await LearnMore.click();
        await this.driver.sleep(5000);
        
    });

});