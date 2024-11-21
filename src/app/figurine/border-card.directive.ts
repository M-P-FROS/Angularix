import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[figBorderCard]'
})
export class BorderCardDirective {

private initialColor:string = '#f5f5f5';
private defaultColor:string = '#009688';
private defaultHeight:number = 300;

  constructor(private el:ElementRef) {
      this.setBorder(this.initialColor);
   }

@Input('figBorderCard') borderColor: string; //alias
//@Input() figBorderCard: string; // sans alias


@HostListener('mouseenter') onMouseEnter () {
this.setBorder(this.borderColor || this.defaultColor);
}

// || = ou
@HostListener('mouseleave') onMouseLeave (){
  this.setBorder(this.initialColor);
}

private setBorder(color:string) {
  let border = 'solid 4px' + color;
  this.el.nativeElement.style.border = border;

}

// Definition de 2 méthodes setHeight et setBorder
//setHeight(height:number) {
 // this.el.nativeElement.style.height = `${height}px`;
  //}
 // setBorder(color:string) {
  //  this.el.nativeElement.style.border = `solid 4 px ${color}px`;
  //}
 // }
}
