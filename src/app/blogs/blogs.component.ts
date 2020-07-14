import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogsData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.blogsData = [
      {src: "../../../assets/img/blog1.svg", content: "Best Mobile App Development Strategies", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
      {src: "../../../assets/img/blog2.svg", content: "Unique Benefits of Creating a Wonderful Mobile App", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
      {src: "../../../assets/img/blog3.svg", content: "How IoT is transforming the world’s businesses", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
      {src: "../../../assets/img/blog4.svg", content: "Our Best and Award-Winning Mobile Apps for Quarantine", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
      {src: "../../../assets/img/blog5.svg", content: "iOS 14 Features and Debutant Augmented Reality App by Apple", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
      {src: "../../../assets/img/blog6.svg", content: "Android 10 will have these hidden features up its sleeve", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
      {src: "../../../assets/img/blog7.svg", content: "How to Digitally Transform Your Business to ensure Growth", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
      {src: "../../../assets/img/blog8.svg", content: "How to Design your Next Mobile App?", link: "iOS", date: "January 20, 2020", avatarImg: "../../../assets/img/avatar.svg", avatarName: "Jane Doe"},
    ];
  }

}
