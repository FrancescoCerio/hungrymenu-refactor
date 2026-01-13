import { Component, Input } from '@angular/core';
import { Dish } from 'src/models/dish';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: ['./dish.component.scss'],
    standalone: false
})
export class DishComponent {
  @Input() dish: Dish;
  constructor() { }

}
