import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Super } from '../models/superheroe';

@Injectable({
  providedIn: 'root',
})
export class UpdateList {
  constructor() {}

  subject: Subject<any> = new Subject<any>();
  listHeros: Super[] = JSON.parse(localStorage.getItem('heroArray')) || [];

  updateListEvent(): void {
    this.subject.next(null);
  }

  pushHero(hero: Super): void {
    this.listHeros.push(hero);
    localStorage.setItem('heroArray', JSON.stringify(this.listHeros));
  }

  removeHero(hero: Super): void {
    let index: number;
    this.listHeros.forEach((e, i) => {
      if (e.id == hero.id) {
        index = i;
      }
    });
    if (index > -1) {
      this.listHeros.splice(index, 1);
      localStorage.setItem('heroArray', JSON.stringify(this.listHeros));
    }
  }

  checkHero(hero: Super): boolean {
    let index: number;
    this.listHeros.forEach((e, i) => {
      if (e.id == hero.id) {
        index = i;
      }
    });
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  check(hero: Super): boolean {
    let c = 0;
    let heroAlignment = hero.biography.alignment;
    this.listHeros.forEach((e) => {
      if (e.biography.alignment == heroAlignment) {
        c += 1;
      }
    });
    if (c <= 2) {
      return true;
    } else {
      return false;
    }
  }
}
