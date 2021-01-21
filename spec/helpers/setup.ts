import {browser} from './browser';
import {halfaker} from './halfaker.com';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;

beforeAll(async function() {
    this.browser = browser;
    this.halfaker = halfaker;
    await this.browser.start();
    await this.browser.get('http://www.halfaker.com');
});

beforeEach(async function() {
    await this.browser.get('http://www.halfaker.com');
});


afterAll(async function() {
    await this.browser.end();
});