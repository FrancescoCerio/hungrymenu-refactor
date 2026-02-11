import { Component, OnInit } from '@angular/core';
import { Section } from 'src/models/section';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
    selector: 'app-ristorante',
    templateUrl: './ristorante.component.html',
    styleUrls: ['./ristorante.component.scss'],
    standalone: false
})
export class RistoranteComponent implements OnInit {
  restaurantMenu: Section[] = [];
  loading = true;

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.supabaseService.getMenu('lecantinedelduca', 'ristorante').subscribe({
      next: (sections) => {
        this.restaurantMenu = sections;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load menu:', err);
        this.loading = false;
      }
    });
  }

  scrollToElem(tag: string){
    const element: HTMLElement = document.getElementById(tag);
    element.scrollIntoView({behavior: 'smooth'});
  }
}
