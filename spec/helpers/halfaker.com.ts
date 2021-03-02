import {home} from './halfaker.com.home';

const halfaker = new function() {
    this.com = {};
    this.com.homepage = home;
    this.com.about_catalog = [{route:'our-story', safezone: []},
                              {route:'news', safezone: []},
                              {route:'contract-vehicles', safezone: [{ left: 1911, top: 2066, right: 1919, bottom: 2066 }]},
                              {route:'small-business-network', safezone: []},];
    this.com.solutions_catalog = [{route:'solutions/digital-services', safezone: []},
                                  {route:'solutions/data-analytics', safezone: []},
                                  {route:'solutions/cyber-security', safezone: []},
                                  {route:'solutions/cloud-solutions', safezone: []}
                                ];
    this.com.catalog = this.com.about_catalog.concat(this.com.solutions_catalog);
  };

export {halfaker}