import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fragment: string;

  constructor(public route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  goToContactUs() {
    console.log('clicked');
    const x = document.querySelector('#contactUs');
    if (x) {
        x.scrollIntoView({behavior: 'smooth'});
    }
  }

}
