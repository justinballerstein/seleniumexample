describe("Halfaker.com", function(){

    it("should go to the Covid 19 Statement page when we click Learn more", async function() {
        await this.halfaker.com.home.learnMore();
        let expectedTitle = 'Novel Coronavirus (COVID-19) Statement | Halfaker & Associates, LLC.';
        let actualTitle = await this.browser.getTitle();
        expect(actualTitle).toEqual(expectedTitle);
    });

});