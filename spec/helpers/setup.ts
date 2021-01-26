import {browser} from './browser';
import {halfaker} from './halfaker.com';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
const website = 'http://www.halfaker.com';

beforeAll(async function() {
    this.browser = browser;
    this.halfaker = halfaker;
    await this.browser.start();
    await this.browser.get(website);
});

beforeEach(async function() {
    await this.browser.get(website);
});


afterAll(async function() {
    await this.browser.end();
});