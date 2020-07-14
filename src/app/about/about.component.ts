import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  services:any[];
  facts:any[];
  stacks:any[];
  values:any[];
  constructor() { }

  ngOnInit(): void {
    this.services = [
      { src: "../../../assets/img/teams.svg", title: 'Dedicated Teams', para: "We dedicate our teams to every project. No member work on simultaneous projects", },
      { src: "../../../assets/img/time.svg", title: 'Time Saving', para: "Don’t Waste time! And hire us to avoid planning and road mapping", },
      { src: "../../../assets/img/risk.svg", title: 'Testing', para: "We never execute a product without thoroughly testing it", },
      { src: "../../../assets/img/office.svg", title: 'Availability', para: "We are available at any time. Catering your needs anytime anywhere"},
      { src: "../../../assets/img/app.svg", title: 'Prototypes Demo', para: "We indulge you to try out demos and get satisfied before the final launch", },
      { src: "../../../assets/img/active.svg", title: 'Pro-active approach', para: "We never rest and always on toes to bring innovation and style", },
      { src: "../../../assets/img/budget.svg", title: 'On Budget', para: "We never get exceeded in the budget. On-time and always on budget", },
      { src: "../../../assets/img/ip.svg", title: 'Most Cost-effective', para: "We provide the best quality in the most effective price range", },
      { src: "../../../assets/img/agile.svg", title: 'Maintenance', para: "Find every service under one roof. Future-proof your digital products", },
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

    this.values = [
      { title: 'Creativity', para: "We are not amateurs and don’t believe in templates. We take every project and think of creativity to apply uniqueness and innovation.",  },
      { title: 'Punctuality', para: "We never miss deadlines and always follow the set timelines to ensure the rapid development process.", },
      { title: 'Passionate', para: "We are a group of ambitious people. We love to grow and succeed in life and remain in the top position.", },
      { title: 'Responsibility', para: "We hold ourselves responsible. Your project becomes our ambition and integral part of our future.", },
      { title: 'Modern', para: "We hate the conservative approach and apply most modern solutions to bring the best results.", },
    ];

  }

}
