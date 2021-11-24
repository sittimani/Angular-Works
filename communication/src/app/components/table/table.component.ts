import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() members: any
  @Output() updatedMembers = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  remove(index: number) {
    this.updatedMembers.emit(index)
  }

}
