import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, map, Observable } from 'rxjs';
import { Section } from 'src/models/section';
import { Dish } from 'src/models/dish';
import { environment } from 'src/environments/environment';

type MealTime = 'lunch' | 'dinner' | 'both';

interface DbDish {
  name: string;
  description: string;
  price: string;
  icon: string | null;
  cad: boolean;
  meal_time: MealTime;
}

interface DbSection {
  title: string;
  url: string;
  icon: string;
  extra_info: string[];
  images: string[];
  meal_time: MealTime;
  dishes: DbDish[];
}

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  getMenu(restaurantSlug: string, menuSlug: string): Observable<Section[]> {
    const mealTime = this.getCurrentMealTime();

    const query = this.supabase
      .from('menus')
      .select(`
        restaurants!inner ( slug ),
        sections (
          title,
          url,
          icon,
          extra_info,
          images,
          meal_time,
          sort_order,
          dishes (
            name,
            description,
            price,
            icon,
            cad,
            meal_time,
            sort_order
          )
        )
      `)
      .eq('slug', menuSlug)
      .eq('restaurants.slug', restaurantSlug)
      .eq('visible', true)
      .single();

    return from(query).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return this.mapSections(data.sections as DbSection[], mealTime);
      })
    );
  }

  private getCurrentMealTime(): 'lunch' | 'dinner' {
    const now = new Date();
    const romeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }));
    return romeTime.getHours() < 16 ? 'lunch' : 'dinner';
  }

  private mapSections(sections: DbSection[], mealTime: 'lunch' | 'dinner'): Section[] {
    return sections
      .filter(s => s.meal_time === 'both' || s.meal_time === mealTime)
      .map(s => {
        const section: Section = {
          title: s.title,
          url: s.url,
          icon: s.icon,
        };

        const filteredDishes = (s.dishes || [])
          .filter(d => d.meal_time === 'both' || d.meal_time === mealTime);

        if (filteredDishes.length > 0) {
          section.dishes = filteredDishes.map(d => {
            const dish: Dish = {
              name: d.name,
              description: d.description,
              price: d.price,
            };
            if (d.icon) dish.icon = d.icon;
            if (d.cad) dish.cad = true;
            return dish;
          });
        }

        if (s.extra_info?.length > 0) section.extraInfo = s.extra_info;
        if (s.images?.length > 0) section.images = s.images;

        return section;
      });
  }
}
