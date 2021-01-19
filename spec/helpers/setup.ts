import {browser} from './browser';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;

beforeAll(async function() {
    this.browser = browser;
    await this.browser.start();
});

afterAll(async function() {
    await this.browser.end();
});