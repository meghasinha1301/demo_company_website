import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  ourWorkData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.ourWorkData = [
      {src: "../../../assets/img/idealSmart1.svg", title: "Ideal Smart", content: "A mobile app developed to transform the wellness industry. Unique designs and smooth user experience…", overlapImage: "../../../assets/img/idealSmart2.svg"},
      {src: "../../../assets/img/scout1.svg", title: "Scoutt", content: "Helped an infamous brand to top the charts with this remarkable mobile app…", overlapImage: "../../../assets/img/scout2.svg"},
      {src: "../../../assets/img/smartBistro1.svg", title: "Smart Bistro", content: "We love food and cooking mobile apps! Smart Bistro helped our partner engage the world…", overlapImage: "../../../assets/img/smartBistro2.svg"},
      {src: "../../../assets/img/fitSwoop1.svg", title: "Fit Swoop", content: "The idea was to provide a top-class fitness mobile app. From design to final product, it’s a treat to watch…", overlapImage: "../../../assets/img/fitSwoop2.svg"},
      {src: "../../../assets/img/reco1.svg", title: "RecoSpot", content: "This mobile app was made possible by our efficient app developers and world best talent…", overlapImage: "../../../assets/img/reco2.svg"},
      {src: "../../../assets/img/bgon1.svg", title: "Bgon", content: "Bgon app is the essence of our amazing work mechanism. Unmatched UX/UI with perfect coding…", overlapImage: "../../../assets/img/bgon2.svg"},
    ];
  }

}
