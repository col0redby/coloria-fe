import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AverageColorComponent} from './average-color/average-color.component';

const routes: Routes = [
  {
    path: 'avg-colors',
    component: AverageColorComponent
  },
  {
    path: '', redirectTo: '/avg-colors', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
