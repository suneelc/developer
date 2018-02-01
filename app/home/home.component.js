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
const state_service_1 = require('../common/state.service');
const details_component_1 = require('../common/details.component');
const view_component_1 = require('../common/view.component');
const user_component_1 = require('../common/user.component');
let HomeComponent = class HomeComponent {
    constructor(_data) {
        this._data = _data;
        this.devs = {};
        this.view = {};
        this.user = {};
        _data.LOAD();
        this.subscription = this._data.navItem$.subscribe(item => this.devs = item);
    }
    ;
    populateCnt(arg) {
        if (arg.ste == "view") {
            this.view = { "_id": "243", "name": "suneel kumar", "phone": "9849144964", "country": "india", "state": "ap", "photo": "111111.jpg", "city": "hyd", company: "cts", "project": "Amex", "empid": "321941", "location": "raheja", "designation": "SA", "email": "adsf@sdf.com" };
        }
        else {
            this.user = { "_id": "243", "name": "suneel kumar", "phone": "9849144964", "country": "india", "state": "ap", "photo": "111111.jpg", "city": "hyd", company: "cts", "project": "Amex", "empid": "321941", "location": "raheja", "designation": "SA", "email": "adsf@sdf.com" };
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/home/home.component.html',
        directives: [details_component_1.detailsComponent, view_component_1.viewComponent, user_component_1.userComponent]
    }), 
    __metadata('design:paramtypes', [state_service_1.StateService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map