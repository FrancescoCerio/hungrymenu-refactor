import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/models/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
})
export class DishComponent implements OnInit {
  @Input() dish: Dish;
  constructor() { }

  ngOnInit() {}

}
