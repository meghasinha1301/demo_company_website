import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurWorkRoutingModule } from './our-work-routing.module';
import { OurWorkComponent } from './our-work.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OurWorkComponent],
  imports: [
    CommonModule,
    OurWorkRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OurWorkModule { }
