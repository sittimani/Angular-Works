import { Component, OnInit } from '@angular/core';
import { HeroList } from 'src/app/core/shared/interface/hero.interface';
import { DataService } from 'src/app/core/shared/service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heros: HeroList[] = []

  constructor(private dataService: DataService) {
    this.dataService.dataSubject$.subscribe(hero =>  {
      this.heros.push(hero)
    })
  }

  ngOnInit(): void {
  }

}
