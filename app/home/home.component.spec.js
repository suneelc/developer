"use strict";
const testing_1 = require('angular2/testing');
const home_component_1 = require('./home.component');
testing_1.describe('Home Component', () => {
    testing_1.it('should be named `HomeComponent`', () => {
        testing_1.expect(home_component_1.HomeComponent.name).toBe('HomeComponent');
    });
    testing_1.it('should have a method called `updateMessage`', () => {
        testing_1.expect(home_component_1.HomeComponent.prototype.updateMessage).toBeDefined();
    });
});
//# sourceMappingURL=home.component.spec.js.map