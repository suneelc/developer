"use strict";
require('core-js');
require('zone.js/dist/zone');
const http_1 = require('angular2/http');
const browser_1 = require('angular2/platform/browser');
const router_1 = require('angular2/router');
const app_component_1 = require('./app.component');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=boot.js.map