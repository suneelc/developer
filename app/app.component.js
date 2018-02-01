"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('angular2/core');
const router_1 = require('angular2/router');
const about_component_1 = require('./about/about.component');
const experiments_component_1 = require('./experiments/experiments.component');
const home_component_1 = require('./home/home.component');
const state_service_1 = require('./common/state.service');
const experiments_service_1 = require('./common/experiments.service');
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app/app.component.html',
        directives: [router_1.ROUTER_DIRECTIVES],
        providers: [state_service_1.StateService, experiments_service_1.ExperimentsService],
    }),
    router_1.RouteConfig([
        { path: '/angular2', name: 'Angular2', component: home_component_1.HomeComponent, useAsDefault: true },
        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
        { path: '/experiments', name: 'Experiments', component: experiments_component_1.ExperimentsComponent }
    ]), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map