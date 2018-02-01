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
let AboutComponent = class AboutComponent {
    constructor(_stateService) {
        this._stateService = _stateService;
        this.title = 'About Page';
        this.body = 'This is the about page body';
    }
    ngOnInit() {
        this.message = this._stateService.getMessage();
    }
    updateMessage(m) {
        this._stateService.setMessage(m);
    }
};
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: 'app/about/about.component.html'
    }), 
    __metadata('design:paramtypes', [state_service_1.StateService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map