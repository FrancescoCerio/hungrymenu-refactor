import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Section } from 'src/models/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class SectionComponent {
  @Input() title: string;
  @Input() sectionList: Section[];
}
