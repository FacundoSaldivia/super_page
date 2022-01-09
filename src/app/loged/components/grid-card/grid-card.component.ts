import { Component, Input, OnInit } from '@angular/core';
import { Super } from '../../models/superheroe';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
})
export class GridCardComponent implements OnInit {
  @Input() listaSuper: Super[];

  lista = [0, 0, 0];
  constructor(private superService: SuperHeroService) {}

  ngOnInit(): void {}
}
