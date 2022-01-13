import { Component, Input, OnInit } from '@angular/core';
import { Super } from '../../models/superheroe';

@Component({
  selector: 'app-grid-card-home',
  templateUrl: './grid-card-home.component.html',
  styleUrls: ['./grid-card-home.component.scss'],
})
export class GridCardHomeComponent implements OnInit {
  @Input() listaSuper: Super[];
  constructor() {}

  ngOnInit(): void {}
}
