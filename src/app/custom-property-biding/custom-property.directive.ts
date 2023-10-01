import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding,
  Input,
} from '@angular/core';
@Directive({
  selector: '[CustomPropertyBiding]',
})
export class CustomPropertyBiding implements OnInit {
  @Input() defaultColor: string = 'transparetn';
  @Input() highlghtColor: string = 'blue';
  // @Input('CustomPropertyBiding') highlghtColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor!: string; //jelikoz tady neni nastavena barva, tak pri nacteni stranky je pozadi bile, pokud to chces uz od nacteni, staci umazat  =
  //  this.defaultColor; a  nasledne odkomentovat kod v ngOnInit

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlghtColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}

//POKUD TO ZMENIM TAKHLE TAK PRI NACTENI STRANKY NEBUDE BARVA NASTAVENA A BUDE TRANSPARENT
//  @HostBinding('style.backgroundColor') backgroundColor: string=this.defaultColor;
