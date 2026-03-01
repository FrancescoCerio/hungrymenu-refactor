import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { restaurantMenu } from 'src/menus/lecantinedelduca/ristorante';
import { Section } from 'src/models/section';
import { SectionComponent } from 'src/app/section/section.component';

@Component({
  selector: 'app-ristorante',
  templateUrl: './ristorante.component.html',
  styleUrls: ['./ristorante.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, SectionComponent]
})
export class RistoranteComponent {
  restaurantMenu: Section[] = restaurantMenu;

  scrollToElem(tag: string) {
    const element: HTMLElement = document.getElementById(tag);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
