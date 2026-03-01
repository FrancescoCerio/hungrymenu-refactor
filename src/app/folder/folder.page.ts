import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Dish } from 'src/models/dish';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class FolderPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  @Input() dishes: Dish[];
  @Input() elements: any[];

  public folder: string;

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
