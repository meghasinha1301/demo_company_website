import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './our-services.component';
import { OurServicesRoutingModule } from './our-services-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OurServicesComponent],
  imports: [
    CommonModule,
    OurServicesRoutingModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OurServicesModule { }
