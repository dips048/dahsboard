import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2ChartsRoutingModule } from './ng2-charts-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './card/card.component';
import { ChartsModule } from 'ng2-charts';
import { components } from './charts';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [DashboardComponent, CardComponent, ...components, OrdersTableComponent],
  imports: [
    CommonModule,
    Ng2ChartsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class Ng2ChartsModule { }
