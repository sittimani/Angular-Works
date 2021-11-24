import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit, AfterViewInit {

  members = [
    {
      name: "manikandan",
      team: "MEAN"
    }, {
      name: "Mohamed Yaisin",
      team: "Django"
    }, {
      name: "Jaya Prakash",
      team: "Django"
    }
  ]

  @ViewChildren(DisplayComponent) children!: QueryList<DisplayComponent>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.children.map(component => {
      component.member.company = "Aspire"
    })
  }

  updatedMembers(index: any) {
    console.log(index);
    this.members.splice(index, 1)
  }

}
