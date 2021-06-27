import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path:'persons',
        loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
