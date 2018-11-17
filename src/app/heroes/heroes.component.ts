import {Component, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";


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

  persons : Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.getHeroes();
    this.getHeroesV1();
  }


  getHeroesV1(): void{
    this.heroService.getHeroes()
      .subscribe(result => this.persons = result)
  }

  selectedHero: Hero

  onSelect(a: Hero) {
    console.log(a);
    this.selectedHero = a
  }

  add(name: String): void{
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.persons.push(hero);
      });
  }
}
