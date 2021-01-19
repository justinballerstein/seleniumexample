describe("Halfaker.com", function(){

    it("should go to the Covid 19 Statement page when we click Learn more", async function() {
        await this.browser.get('http://www.halfaker.com');
        await this.browser.sleep(2000);
        await this.browser.click('div.covid-link a');
        await this.browser.sleep(2000);
        let expectedTitle = 'Novel Coronavirus (COVID-19) Statement | Halfaker & Associates, LLC.';
        let actualTitle = await this.browser.getTitle();
        expect(actualTitle).toEqual(expectedTitle);
    });

});