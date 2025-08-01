import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'option1', component: Option1Component },
  { path: 'option2', component: Option2Component },
  { path: 'option3', component: Option3Component },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
