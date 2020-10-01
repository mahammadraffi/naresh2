import { ElementRef, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
 constructor(h:ElementRef){
  h.nativeElement.style.background='grey';
  h.nativeElement.style.padding='10px';
  h.nativeElement.style.border='1px solid #111';
  h.nativeElement.style.borderradius='10px';
  h.nativeElement.style.color='white';

 }
 @HostBinding("style.background") background="green";
  @HostListener("click") clickEvent(){
    alert('hello host');
  }
  @HostListener("mouseenter") mouseenter(){
    console.log("mouse entered")
    this.background="red";
  }
  @HostListener("mouseleave") mouseleave(){
    console.log("mouse leave")
    this.background="blue"
  }


}
