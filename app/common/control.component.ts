import {Component, OnInit,Input} from 'angular2/core';


@Component({
  selector: 'con',
  templateUrl: '<div>{{body}}</div>
    <ng-content select="footer"></ng-content>',
  directives: [ ],
})
export class ControlComponent implements OnInit {
  body:  string = 'suneel is in india';
  
constructor() { }

doSomething() {
console.log("i am from control");
}


}
