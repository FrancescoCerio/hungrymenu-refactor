import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./homepage/homepage.component').then(m => m.HomepageComponent)
  },
  {
    path: 'folder/:id',
    loadComponent: () => import('./folder/folder.page').then(m => m.FolderPage)
  },
  {
    path: 'lecantinedelduca',
    children: [
      {
        path: '',
        loadComponent: () => import('./lecantinedelduca/lecantinedelduca.component').then(m => m.LecantinedelducaComponent)
      },
      {
        path: 'ristorante',
        loadComponent: () => import('./lecantinedelduca/ristorante/ristorante.component').then(m => m.RistoranteComponent)
      },
      {
        path: 'gelateria',
        loadComponent: () => import('./lecantinedelduca/gelateria/gelateria.component').then(m => m.GelateriaComponent)
      }
    ]
  }
];
