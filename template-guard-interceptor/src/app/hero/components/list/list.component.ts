import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/shared/service/auth.service';
import { DataService } from 'src/app/core/shared/service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private authService: AuthService, private data: DataService) { 
    this.data.getHeros().subscribe(data => {
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }

  addToken() {
    this.authService.addToken()
  }

}
