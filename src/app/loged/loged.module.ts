import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogedRoutingModule } from './loged-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    LogedRoutingModule
  ]
})
export class LogedModule { }
