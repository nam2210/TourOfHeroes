import { Injectable } from '@angular/core';
import { Hero} from "./Hero";
import {HEROES} from "./mock-heroes";
import {Observable,of} from 'rxjs'
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() : Hero[]{
    return HEROES
  }

  getHeroesObservable() : Observable<Hero[]>{
    this.messageService.add('HeroService: fetched data')
    return of(HEROES)
  }
}
