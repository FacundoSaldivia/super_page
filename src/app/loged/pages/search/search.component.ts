import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Super } from '../../models/superheroe';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private superService: SuperHeroService) {}

  listaSuper: Super[] = [];
  searching: boolean = true;

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit(): void {
    // this.searchByName('flash');
  }
  searchByName(name: string): void {
    this.superService.getResult(name).subscribe(
      (res) => {
        this.listaSuper = res.results;
        this.searching = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submit() {
    console.log(this.searchForm.value);
    this.searchByName(this.searchForm.value.name);
  }
}
