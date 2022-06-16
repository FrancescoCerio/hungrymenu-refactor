import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lecantinedelduca',
    loadChildren: () => import('./lecantinedelduca/lecantinedelduca.module').then( m => m.LecantinedelducaModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled' },)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
