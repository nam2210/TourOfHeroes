import {Component, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes-nam',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name : 'Terminator'
  };

  persons = HEROES;

  constructor() { }

  ngOnInit() {
  }

  selectedHero: Hero

  onSelect(a: Hero) {
    console.log(a);
    this.selectedHero = a
  }
}
