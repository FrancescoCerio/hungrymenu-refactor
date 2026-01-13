import { Component, Input } from '@angular/core';

import { Section } from 'src/models/section';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    standalone: false
})
export class SectionComponent {

  @Input() title: string;
  @Input() sectionList: Section[];

  constructor() {

   }

}
