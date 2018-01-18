import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LegacyPixelsComponent } from './legacy-pixels/legacy-pixels.component';
import { FunvillasComponent } from './funvillas/funvillas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legacy-pixels', component: LegacyPixelsComponent },
  { path: 'funvillas', component: FunvillasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }