import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogsModule { }
