import {Component, OnInit,Input,Output,ViewChild,ContentChild,EventEmitter} from 'angular2/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'detail',
  template: '<div class="dtl-section section"><div class="dtl-header section"> Developer Details<div class="search"><input type="text" #search name="search" title="Search" (blur)="searchClick($event)" alt="Search" placeholder="Search" id="search" maxLength="30" ref="devSearch" /></div>'+
'<a id="searchbtn" href="#" (click)="searchClick($event)" ></a></div>'+
    '<table id="details">'+
      '<thead>'+
        '<tr>'+
          '<td>User</td><td>Phone</td><td>Emp. ID</td><td>Project</td><td>Location</td><td>Designation</td><td width="50">controls</td>'+
        '</tr>'+
      '</thead>'+
      '<tbody>'+
        '<tr *ngFor="#tableItem of items.entries">'+
         '<td>{{tableItem.name}}</td><td>{{tableItem.phone}}</td><td>{{tableItem.empid}}</td><td>{{tableItem.project}}</td><td>{{tableItem.location}}</td><td>{{tableItem.designation}}</td>'+
          '<td><a class="edit" title="edit the developer details" href={{tableItem._id}} (click) = "populateData($event)"></a><a class="view-more" title="view more developer details" href={{tableItem._id}} (click) = "populateData($event)" ></a><a  class="delete" title="delete the developer details" href={{tableItem._id}} (click) = "deleteClick($event)" ></a></td>'+
		'</tr>'+
      '</tbody>'+
    '</table>'+
'<div class="paging" >Paging:<a *ngFor="#item of items.pgn" href={{item.itm}} (onClick)=pagingEvt($event) >{{item.itm}}</a></div></div>'
})
export class detailsComponent implements OnInit {
  message:string;
  @Input() items:Object;
  @Output("populate") populate:EventEmitter<Object> = new EventEmitter();
  @ViewChild('search') search;
  constructor(private _data: StateService) {
  
   }

  ngOnInit() {
	
  }

  deleteClick(e) {
	this._data.DELETE(e.target.getAttribute('href'));
	return false;
  }
  
  pagingEvt(e) {
	this._data.PAGINATION(e.target.getAttribute('href'));
	return false;
  }
  populateData(e) {
	this.populate.next({ste:e.target.className=="view-more"?"view":"edit",id:e.target.getAttribute('href')});
	return false;
  }

  searchClick(e) {
	this._data.SEARCH(this.search.nativeElement.value);
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
