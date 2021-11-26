import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-httpclient';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(x => {
     // console.log(x.name);
    })

    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        console.log("captured");
      }
    //  console.log(events)
    })
  }
  
  onActivate(event:any) {
      console.log(event); 
  }
}
/*
  Events:
    NavigationStart
    RouteRecognized
    GuardCheckStart
    ChildActivationStart
    ActivationStart
    GuardsCheckEnd
    ResolveStart
    ResolveEnd
    AcivationEnd
    ChildActivationEnd
    NavigationEnd
*/