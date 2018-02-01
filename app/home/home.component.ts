
import {Component, OnInit,Input,Output,ViewChild,ContentChild,EventEmitter} from 'angular2/core';
import {StateService} from '../common/state.service';
import {detailsComponent} from '../common/details.component';
import {viewComponent} from '../common/view.component';
import {userComponent} from '../common/user.component';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'home',
  template: '<div class="cogn-header"><h2> DEVELOPER INFORMATION (APPLICATION) WITH ANGULAR 02</h2><div class="links"><a href="/angular">ANGULAR</a></div><div class="cogn-nav"><a href="/">HOME</a></div></div><div class="cgn-content"><div id="dev-main"><div><detail [items]="devs" (populate)="populateCnt($event)"></detail><view [views]="view"></view><user [devs]="user" [edit]="isEdit"></user><div class="progress section"></div></div></div></div><div class="cogn-footer"></div>',
  directives: [detailsComponent, viewComponent, userComponent]
})
export class HomeComponent implements OnInit {
subscription:Subscription;
developer:Object = {entries:[{_id:"243","name":"suneel kumar","phone":"9849144964","country":"india","state":"ap",photo:"","city":"hyd",project:"Amex","empid":"321941","location":"raheja","designation":"SA","email":"adsf@sdf.com"},{_id:"234","name":"anil kumar","phone":"9849144964","country":"india","state":"ap","city":"hyd","empid":"321941","location":"raheja","designation":"SA",photo:"","email":"adsf@sdf.com"}]};
message:string;
devs:Object={};
view:Object={}; 
user:Object = {};
isEdit:boolean = false;

constructor(private _data: StateService) { 
	_data.LOAD();
	this.subscription = this._data.navItem$.subscribe(item => this.devs = item);
};

populateCnt(arg)
{

let record = this.devs.entries;
for(var value in record){
if(parseInt(arg.id) == parseInt(record[value]._id)){
		if(arg.ste == "view"){
		 this.view =  record[value]
		}
		else{
		this.isEdit = true;
		 this.user =  record[value];
		}
	}
}
	
}

ngOnInit() {
	
}
ngOnDestroy() {
	this.subscription.unsubscribe();
}
  
}

