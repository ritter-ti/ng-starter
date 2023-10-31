import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngtw-accordion',
  template: `
    <div class="divide-y divide-gray-200 overflow-hidden border-gray-200 dark:divide-gray-700 dark:border-gray-700"
         [ngClass]="{ 'rounded-lg border': !flush, 'border-b': flush }">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class NgtwAccordionComponent {
  @Input() flush?: boolean;
}
