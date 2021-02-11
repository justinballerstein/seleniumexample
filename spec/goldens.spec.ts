var looksSame = require('looks-same');

describe("Halfaker.com", function(){

    it("should go to all the pages and take screenshots", async function() {
        const location = './spec/goldens/';
        const filename_prefix = 'halfaker.com.';
        const filename_sufix = '.png';
        await this.browser.browserBig();
        for (let i = 0; i < this.halfaker.com.catalog.length; i++) {
            await this.browser.get(this.halfaker.com.catalog[i]);
            let friendly_route_name = this.halfaker.com.catalog[i].replace(new RegExp('/', 'g'), '.');;
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
                looksSame(location + goldenfilename, location + testfilename, {tolerance: 1}, function(error, {equal, diffBounds, diffClusters}) {
                    if(equal != true) {
                      looksSame.createDiff({
                        reference: location + goldenfilename,
                        current: location + testfilename,
                        diff: location + diffilename,
                        highlightColor: '#ff00ff', // color to highlight the differences
                        strict: false, // strict comparsion
                        tolerance: 1,
                        antialiasingTolerance: 1,
                        ignoreAntialiasing: true, // ignore antialising by default
                        ignoreCaret: true // ignore caret by default
                      }, function(error) {
                      });
                    } else {
                      console.log("test passed");
                    };
                });
            };
        };
    });

});