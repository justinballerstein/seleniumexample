import {browser} from './browser';

const home = new function() {
    this.learnMoreLink = "div.covid-link a";
    this.learnMore = async () => {
        await browser.click(this.learnMoreLink);
    };
  };

export {home}