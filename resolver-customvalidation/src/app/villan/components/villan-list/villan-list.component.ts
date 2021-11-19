import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villan-list',
  templateUrl: './villan-list.component.html',
  styleUrls: ['./villan-list.component.css']
})
export class VillanListComponent implements OnInit {

  headers: string[] = ["name", "power", "movie"]
  items: any = [
    {
      name: "thonos",
      power: "best fighter",
      movie: "end game"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
