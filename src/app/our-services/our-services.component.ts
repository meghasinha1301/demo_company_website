import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  servicesData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.servicesData = [
      {title: "iOS Development", src: "../../../assets/img/iosDevelopment.svg", content: "No one knows about Apple iOS better than us. We offer agile development in the most cost-effective method."},
      {title: "Android Development", src: "../../../assets/img/androidDevelopment.svg", content: "Engage our Android development to reach a maximum of users with superior device compatibility."},
      {title: "Product Strategy", src: "../../../assets/img/productStrategyService.svg", content: "We ensure growth and prosperity by applying the best product strategy tailored to your business."},
      {title: "UI/UX Design", src: "../../../assets/img/uiux.svg", content: "Amazing & Unique UI/UX is our core strength. We deliver the outstanding user experience."},
      {title: "IoT Development", src: "../../../assets/img/iotDevelopment.svg", content: "Get the most out of IoT because we are the best IoT development agency."},
      {title: "React Native", src: "../../../assets/img/reactNativeDevelopment.svg", content: "Faster, smooth, and engaging apps with React Native is our essence."},
    ];
  }

}
