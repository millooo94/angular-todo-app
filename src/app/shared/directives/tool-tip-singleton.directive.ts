import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { Instance, createSingleton } from 'tippy.js'
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {

  @ContentChildren(ToolTipDirective, {descendants: true}) elementsWithToolTips!: QueryList<ToolTipDirective>

  singletonInstance!: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.singletonInstance = createSingleton(this.getTippyInstances(), {
      delay: [200, 0],
      moveTransition: 'transform, 0.2s ease-out'
    });

    this.elementsWithToolTips.changes.subscribe(() => {
      this.singletonInstance.setInstances(this.getTippyInstances());
    })
  }

  getTippyInstances(): Instance[] {
    return this.elementsWithToolTips
      .toArray()
      .map(e => e.tippyInstance)
  }

}
