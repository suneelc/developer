import {Directive, ElementRef, Input,Attribute,HostBinding, EventEmitter,HostListener} from 'angular2/core';
@Directive({
    selector: '[state]',
	host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()',
			
			
        }
	
})
export class StateDirective {
@Input() state:string;
mmm = true;
@HostBinding('attr.sun') sun:boolean;
@HostBinding('value') val:string = "india";

//this is nothing but hosting attribure or attribute or assigning a class
@HostBinding('class.suneel') suneel:boolean;

    constructor(private el: ElementRef, @Attribute("state") public init:string) {
      el.nativeElement.style.backgroundColor = init;
	   //alert(init);
	   //setTimeout( () => this.mmm = false, 2000);
	   this.suneel = true;
	    
		
    }

	
  numberOfClicks = 0;
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
	onMouseEnter() {
	this.state = "red";
	
       this.el.nativeElement.style.backgroundColor = this.state;
    }
 
    onMouseLeave() {
       this.el.nativeElement.style.backgroundColor = "white"
    }
	
}
