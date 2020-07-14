import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services: any[];
  facts: any[];
  stacks: any[];
  industrys: any[];
  constructor() { }

  ngOnInit(): void {
    this.services = [
      { src: "../../../assets/img/ios.svg", title: 'iOS Development', para: "No one knows about Apple iOS better than us. We offer agile development in the most cost-effective method.", },
      { src: "../../../assets/img/android.svg", title: 'Android Development', para: "Engage our Android development to reach a maximum of users with superior device compatibility." },
      { src: "../../../assets/img/product_strategy.svg", title: 'Product Strategy', para: "We ensure growth and prosperity by applying the best product strategy tailored to your business." },
      { src: "../../../assets/img/ax.svg", title: 'UI/UX Design', para: "Amazing & Unique UI/UX is our core strength. We deliver the outstanding user experience." },
      { src: "../../../assets/img/iot.svg", title: 'IoT Development', para: "Get the most out of IoT because we are the best IoT development agency." },
      { src: "../../../assets/img/react.svg", title: 'React Native', para: "Faster, smooth, and engaging apps with React Native is our essence." },
    ];
    this.facts = [
      { src: "../../../assets/img/Union_10.svg", title: '620+', para: "Successful Project", },
      { src: "../../../assets/img/Union_11.svg", title: '1200', para: "Happy Clients" },
      { src: "../../../assets/img/Union_12.svg", title: '450', para: "Awards Win" },
    ];

    this.stacks = [
      { src: "../../../assets/img/regus.svg" },
      { src: "../../../assets/img/victoria.svg"},
      { src: "../../../assets/img/BBC.svg"},
      { src: "../../../assets/img/citco.svg"},
      { src: "../../../assets/img/citibank.svg"},
    ];
    this.industrys = [
      { src: "../../../assets/img/Union16.svg", title:'Beauty & Fashion' },
      { src: "../../../assets/img/Union15.svg", title:'On Demand Services'},
      { src: "../../../assets/img/Union12.svg", title:'Healthcare'},
      { src: "../../../assets/img/Union13.svg", title:'Fitness & Wellness'},
      { src: "../../../assets/img/Union14.svg", title:'Education'},
    ];
  }
}
