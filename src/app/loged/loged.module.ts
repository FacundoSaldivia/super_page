import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogedRoutingModule } from './loged-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {
  CardComponent,
  NgbdModalContent,
} from './components/card/card.component';
import { SearchComponent } from './pages/search/search.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    GridCardComponent,
    HomeComponent,
    CardComponent,
    SearchComponent,
    ChartComponent,
    NgbdModalContent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    LogedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
})
export class LogedModule {}
