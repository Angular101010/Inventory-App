import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import { DataTableComponent } from './components/data-table/data-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'data-table', component: DataTableComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
