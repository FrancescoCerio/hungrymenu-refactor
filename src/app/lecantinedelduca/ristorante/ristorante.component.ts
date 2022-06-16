import { Component, OnInit } from '@angular/core';
import { restaurantMenu } from 'src/menus/lecantinedelduca/ristorante';
import { Section } from 'src/models/section';
@Component({
  selector: 'app-ristorante',
  templateUrl: './ristorante.component.html',
  styleUrls: ['./ristorante.component.scss'],
})
export class RistoranteComponent implements OnInit {
  restaurantMenu: Section[] = restaurantMenu;
  constructor() { }

  ngOnInit() {}


  scrollToElem(tag: string){
    const element: HTMLElement = document.getElementById(tag);
    element.scrollIntoView({behavior: 'smooth'});
  }
}
