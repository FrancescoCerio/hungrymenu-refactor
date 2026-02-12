import { Component } from '@angular/core';

@Component({
    selector: 'app-menu-skeleton',
    templateUrl: './menu-skeleton.component.html',
    styleUrls: ['./menu-skeleton.component.scss'],
    standalone: false,
})
export class MenuSkeletonComponent {
  sections = Array(3);
  dishes = Array(14);
}
