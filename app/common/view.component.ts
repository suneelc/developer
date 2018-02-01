import {Component, OnInit,Input,Output,ViewChild,ContentChild,EventEmitter} from 'angular2/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'view',
  template: '<div class="dtl-view section">'+
    '<div class="view-photo"><img [src]="pht" title="developer photo" width="120" height="120" /></div>'+
    '<div class="view-info">'+
    '<ul><li>Developer Name:</li><li>{{views.name}}</li>'+
    '<li>Phone:</li><li>{{views.phone}}</li>'+
    '<li>Country:</li><li>{{views.country}}</li>'+
    '<li>State</li><li>{{views.state}}</li>'+
    '<li>City:</li><li>{{views.city}}</li>'+
    '<li>Company:</li><li>{{views.company}}</li>'+
    '<li>Emp.ID:</li><li>{{views.empid}}</li>'+
    '<li>Work Location:</li><li>{{views.location}}</li>'+
    '<li>Designation:</li><li>{{views.designation}}</li>'+
    '<li>E-mail:</li><li>{{views.email}}</li>'+
    '</ul></div></div>'
})
export class viewComponent implements OnInit {
  message:string; 
  @Input() views:Object;
  
  pht:string;
  
  constructor(private _stateService: StateService) { 

  }

  ngOnInit() {
   //this.pht = "./images/"+(this.views.photo || "default.png")+"?"+ Date.now();  
   this.pht = "default.png";  
   this.message = this._stateService.getMessage();
	
  }
/*
parentFire(arg)
{
console.log(arg);
}  
  
  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }*/
}
