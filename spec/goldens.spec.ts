import { browser } from "./helpers/browser";

describe("Halfaker.com", function(){

    it("should go to all the pages and take screenshots", async function() {
        const location = './spec/goldens/';
        const filename_prefix = 'halfaker.com.';
        const filename_sufix = '.png';
        await this.browser.browserBig();
        let results: Array<{ difference: boolean, pagename: string }> = [];
        let pass = true;
        for (let i = 0; i < this.halfaker.com.catalog.length; i++) {
            await this.browser.get(this.halfaker.com.catalog[i].route);
            let friendly_route_name = this.halfaker.com.catalog[i].route.replace(new RegExp('/', 'g'), '.');;
            let goldenfilename = filename_prefix + friendly_route_name + filename_sufix;
            let testfilename = filename_prefix + friendly_route_name + '.test' + filename_sufix;
            let diffilename = filename_prefix + friendly_route_name + '.dif' + filename_sufix;
            let goldenExists = this.browser.fileExists(location, goldenfilename);

            if (goldenExists) {
                await this.browser.takeScreenshot(location,testfilename);
            } else {
                await this.browser.takeScreenshot(location,goldenfilename);
            }
            console.log(await this.browser.getTitle());
            if (goldenExists) {
                let result = await browser.lookTheSame(location, goldenfilename, testfilename, diffilename, friendly_route_name, this.halfaker.com.catalog[i].safezone)
                console.log(result);
                if (result.difference == true){
                    pass = false;
                    console.warn("Difference found: " + result.pagename);
                } else {
                    console.info("Screenshot check passed");
                };
                
                results.push(result);
            };
        };
        console.info(results);
        console.info(pass);
        expect(pass).toBeTrue();
    });

});