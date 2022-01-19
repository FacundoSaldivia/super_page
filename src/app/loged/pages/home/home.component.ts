import { Component, OnInit } from '@angular/core';
import { powerstats } from '../../models/stats';
import { forkJoin, Subscription } from 'rxjs';
import { Super } from '../../models/superheroe';
import { SuperHeroService } from '../../services/super-hero.service';
import { UpdateList } from '../../services/update-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  chartLoading = true;
  heroArray: Super[] = this.updateListService.listHeros || [];
  updateListSubscription: Subscription =
    this.updateListService.subject.subscribe((not) => {
      this.updateList();
    });
  heroStats: powerstats = {
    power: 0,
    intelligence: 0,
    speed: 0,
    strength: 0,
    durability: 0,
    combat: 0,
  };
  loadingStats: powerstats = {
    power: 0,
    intelligence: 0,
    speed: 0,
    strength: 0,
    durability: 0,
    combat: 0,
  };
  greatestStat: string = '';
  averageHeight: number = 0;
  averageWeight: number = 0;

  constructor(
    private superService: SuperHeroService,
    private updateListService: UpdateList
  ) {}

  ngOnInit(): void {
    this.getHeros(this.heroArray);
  }

  getHeros(heros: Super[]): void {
    this.averageWeight = 0;
    this.averageHeight = 0;
    heros.forEach((e: Super) => {
      this.heroStats.combat += this.checkIfNaN(e.powerstats.combat);
      this.heroStats.power += this.checkIfNaN(e.powerstats.power);
      this.heroStats.intelligence += this.checkIfNaN(e.powerstats.intelligence);
      this.heroStats.speed += this.checkIfNaN(e.powerstats.speed);
      this.heroStats.strength += this.checkIfNaN(e.powerstats.strength);
      this.heroStats.durability += this.checkIfNaN(e.powerstats.durability);
      this.averageHeight += parseInt(e.appearance.height[1]);
      this.averageWeight += parseInt(e.appearance.weight[1]);
    });
    this.updateChart(heros.length);
    this.setGreatestStrength(this.heroStats);
    this.averageHeight = Math.floor(this.averageHeight / heros.length);
    this.averageWeight = Math.floor(this.averageWeight / heros.length);
  }

  updateChart(div: number): void {
    this.heroStats.combat = this.heroStats.combat / div;
    this.heroStats.power = this.heroStats.power / div;
    this.heroStats.intelligence = this.heroStats.intelligence / div;
    this.heroStats.speed = this.heroStats.speed / div;
    this.heroStats.strength = this.heroStats.strength / div;
    this.heroStats.durability = this.heroStats.durability / div;

    this.yourFunction();
  }
  yourFunction = async () => {
    await this.delay(100);
    this.chartLoading = false;
  };
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  setChart(): void {
    this.heroStats = {
      power: 0,
      intelligence: 0,
      speed: 0,
      strength: 0,
      durability: 0,
      combat: 0,
    };
  }
  updateList(): void {
    this.chartLoading = true;
    this.setChart();
    this.heroArray = this.updateListService.listHeros;
    this.getHeros(this.heroArray);
    if (this.heroArray.length == 0) {
      this.heroArray = [];
    }
  }
  checkIfNaN(stat): number {
    stat = parseInt(stat);
    if (isNaN(stat)) {
      return 0;
    } else {
      return stat;
    }
  }

  setGreatestStrength(stats: powerstats): void {
    console.log(stats);
    let auxStrength: number = 0;
    let auxNameStrength: string = '';
    if (stats.combat > auxStrength) {
      auxStrength = stats.combat;
      auxNameStrength = 'Combat';
    }
    if (stats.durability > auxStrength) {
      auxStrength = stats.durability;
      auxNameStrength = 'Durability';
    }
    if (stats.intelligence > auxStrength) {
      auxStrength = stats.intelligence;
      auxNameStrength = 'Intelligence';
    }
    if (stats.power > auxStrength) {
      auxStrength = stats.power;
      auxNameStrength = 'Power';
    }
    if (stats.speed > auxStrength) {
      auxStrength = stats.speed;
      auxNameStrength = 'Speed';
    }
    if (stats.strength > auxStrength) {
      auxStrength = stats.strength;
      auxNameStrength = 'Strength';
    }
    this.greatestStat = auxNameStrength;
  }
}
