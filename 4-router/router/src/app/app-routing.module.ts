import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

const routes: Routes = [

   { path: '', component: HomeComponent },
   { path: 'lazy', 
     data: { preload: false },
     loadChildren: './lazy/lazy.module#LazyModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
