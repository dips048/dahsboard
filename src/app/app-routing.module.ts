import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';

const routes: Routes = [
  { path: 'multi-select', component: MultiSelectComponent },
  { path: 'multiple-select', component: MultipleSelectComponent },
  { path: 'ng2-charts', loadChildren: () => import('./ng2-charts/ng2-charts.module').then(m => m.Ng2ChartsModule) },
  { path: 'ngx-charts', loadChildren: () => import('./ngx-charts/ngx-charts.module').then(m => m.NgxChartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
