import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy, { Instance } from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges {

  @Input('appToolTip') tooltipContent!: string;

  constructor(private elRef: ElementRef<HTMLElement>) { }

  tippyInstance!: Instance;

  ngAfterViewInit(): void {
    this.tippyInstance =  tippy(this.elRef.nativeElement, {
      content: this.tooltipContent,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tooltipContent']) {
      this.updateToolTipContent();
    }
  }

  updateToolTipContent(): void {
    if (this.tippyInstance) {
      this.tippyInstance.setContent(this.tooltipContent);
    }
  }
}
