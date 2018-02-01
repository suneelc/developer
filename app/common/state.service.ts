import {Injectable} from 'angular2/core';
import { BehaviorSubject } from 'rxjs/Rx';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';

@Injectable()
export class StateService {
	private _message = 'Hello Message';
	private _navItemSource = new BehaviorSubject<Object>(0);
	navItem$ = this._navItemSource.asObservable();
	constructor(private _http:Http,private requestoptions:RequestOptions){ }
XHR(path,data,mtd)
{
//let type="application/json";
	//mtd == "post" || mtd == "put" ? (type=false):(type="application/json");
/*
let action = (mtd == "post"?RequestMethod.Post:RequestMethod.Get);
 mtd == "put" &&(action =RequestMethod.Put); 
 let headers = new Headers();
 
        headers.append("Content-Type", "application/json");
        this.requestoptions = new RequestOptions({
            method: action,
            url: path,
            headers: headers,
            body: data
        })

        this._http.request(new Request(this.requestoptions)).map( (responseData) => {return responseData.json();}).subscribe(res => (this._navItemSource.next(res)));

*/
//this._http.get(path).map( (responseData) => {console.log(responseData.json());return responseData.json();}).subscribe( res => (this._navItemSource.next(res),console.log(res)));
var obj = {entries:[{_id:"243","name":"madhu kumar","phone":"9849144964","country":"india","state":"ap",photo:"","city":"hyd",project:"Amex","empid":"321941","location":"raheja","designation":"SA","email":"adsf@sdf.com"},{_id:"234","name":"venu kumar","phone":"9849144964","country":"india","state":"ap","city":"hyd","empid":"321941","location":"raheja","designation":"SA",photo:"","email":"adsf@sdf.com"}],pgn:[{itm:1}]};
this._navItemSource.next(obj);
};
  
ADD(data){
    this.XHR("/",data,"post"); 
  };
UPDATE(data){
	this.XHR("/u",data,"put"); 
  };
DELETE(id){
    this.XHR("/d/"+id,"","get"); 
  };
PAGINATION(id){
    this.XHR("/pgn?page="+id+"&size=10","","get"); 
  };
LOAD(){
	this.XHR("/load",'',"get"); 
};
SEARCH(val){
	this.XHR("/search?srh="+val,'',"get"); 
};
  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
