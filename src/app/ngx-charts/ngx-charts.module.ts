import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsRoutingModule } from './ngx-charts-routing.module';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './card/card.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component'
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DashComponent,CardComponent, LineChartComponent],
  imports: [
    CommonModule,
    NgxChartsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    NgxChartsModule
  ]
})
export class NgxChartModule { }
