describe("Halfaker.com", function(){

    it("should go to all the pages", async function() {
        for (let i = 0; i < this.halfaker.com.catalog.length; i++) {
            await this.browser.get(this.halfaker.com.catalog[i]);
            console.log(await this.browser.getTitle());
        }
    });

});