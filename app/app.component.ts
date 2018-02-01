import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';


@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [StateService],
})
@RouteConfig([
  {path: '/Angular2',        name: 'Angular2',        component: HomeComponent, useAsDefault: true }
])
export class AppComponent {}
