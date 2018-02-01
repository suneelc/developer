import {Component, ElementRef,OnInit,Input,Output,ViewChild,ContentChild,EventEmitter} from 'angular2/core';
import {StateService} from '../common/state.service';
import {  
  FORM_DIRECTIVES,  
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,  
  FormGroup  
} from '@angular/forms';

@Component({
  selector: 'user',
  template: '<div class="info-section section" id="info-section">'+
   '<div class="dtl-header section"> Developer Inputs </div>'+
    '<form id="frmdeveloper" name="developer" [formGroup]="form" (ngSubmit)="onSubmit(form.value)" autoComplete="off" encType="application/x-www-form-urlencoded">'+
     ' <p id="error-msg">Please make sure all required fields are complete and valid</p>'+
      '<ul><li><input type="text" name="name" [formControl]="form.controls["name"]" title="Devloper Name" [value]="devs.name" alt="Devloper Name" placeholder="Devloper Name" id="name" maxLength="30" /></li>'+
        '<li><input type="text" name="phone"  title="Phone" [value]="devs.phone" alt="Phone" placeholder="Phone" id="phone" maxLength="30" /></li>'+
        '<li><input type="text" name="country" title="Country" [value]="devs.country" placeholder="Country" alt="Country" id="country" maxLength="50" /></li>'+
        '<li><input type="text" name="state"  title="State" [value]="devs.state" placeholder="State" alt="State" id="state" maxLength="50" /></li>'+
        '<li><input type="text" name="city"  title="City" [value]="devs.city" placeholder="City" alt="City" id="city" maxLength="50" /></li>'+
        '<li><input type="text" name="company" title="Company" [value]="devs.company" placeholder="Company" alt="Company" id="company" maxLength="50" /></li>'+
        '<li><input type="text" name="empid" title="Emp. ID" [value]="devs.empid" placeholder="Emp. ID" alt="Emp. ID" id="empid" maxLength="50" /></li>'+
        '<li><input type="text" name="project" title="Project" [value]="devs.project" placeholder="Project" alt="Project" id="project" maxLength="50" /></li>'+
        '<li><input type="text" name="location" title="Location" [value]="devs.location" placeholder="Location" alt="Location" id="location" maxLength="50" /></li>'+
        '<li><input type="text" name="designation" title="Designation" [value]="devs.designation" placeholder="Designation" alt="Designation" id="designation" maxLength="50" /></li>'+
        '<li class="lng"><input type="text" name="email" title="E-mail" [value]="devs.email" alt="email" placeholder="E-mail" id="email"  maxLength="50" /></li>'+
        '<li class="lng"><input id="photo" name="photo"  type="file" accept="image/*" onChange={this.selected} />'+
         '<button id="photo-btn" type="button" value="Photo" (click)="photoClk($event)" >Photo</button></li>'+
        '<li class="lng"><div class="submit-section"><input type="reset" value="Reset" id="reset-btn" title="Click to reset" /><input type="button" value="Submit" id="submit-btn" (click)="addClick($event)" title="Click to Submit" class="learn-btn" /></div></li></ul></form><div class="status"></div></div>',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class userComponent implements OnInit {
  message:string;
  @Input() devs:Object;
  @Input() edit:boolean;
  @Output("add") add:EventEmitter<Object> = new EventEmitter();
  @Output("photo") photo:EventEmitter<Object> = new EventEmitter();
  developer:Object={};
  form: FormGroup;
  constructor(private _data: StateService,private _ele: ElementRef,fb: FormBuilder) { 
  this.form = fb.group({  
      'name': ['ABC123']  
    }); 
  
  }

  ngOnInit() {
   
   
	
  }
onSubmit(value: any): void {  
    console.log('you submitted value: ', value);  
  }
addClick(e)
{
console.log(this.edit);
this.edit ? this._data.UPDATE(JSON.stringify(this.developer)):this._data.ADD(JSON.stringify(this.developer));

this.edit = false;
return false;
} 

/*parentFire(arg)
{
console.log(arg);
}  
  
  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }*/
}
