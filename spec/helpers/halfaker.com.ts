import {home} from './halfaker.com.home';

const halfaker = new function() {
    this.com = {};
    this.com.homepage = home;
    this.com.about_catalog = ['our-story','news', 'contract-vehicles', 'small-business-network'];
    this.com.solutions_catalog = ['solutions/digital-services', 'solutions/data-analytics', 'solutions/cyber-security', 'solutions/cloud-solutions'];
    this.com.catalog = this.com.about_catalog.concat(this.com.solutions_catalog);
  };

export {halfaker}