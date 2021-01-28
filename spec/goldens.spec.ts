describe("Halfaker.com", function(){

    it("should go to all the pages", async function() {
        const location = './spec/goldens/';
        const filename_prefix = 'halfaker.com.';
        const filename_sufix = '.png';

        for (let i = 0; i < this.halfaker.com.catalog.length; i++) {
            let friendly_route_name = this.halfaker.com.catalog[i].replace(new RegExp('/', 'g'), '.');;
            let filename = filename_prefix + friendly_route_name + filename_sufix;
            await this.browser.get(this.halfaker.com.catalog[i]);
            await this.browser.takeScreenshot(location,filename);
            console.log(await this.browser.getTitle());
        };
    });

});