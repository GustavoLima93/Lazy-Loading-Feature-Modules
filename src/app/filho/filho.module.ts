import { FilhoRoutingModule } from './filho.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';

@NgModule({
  imports: [
    CommonModule,
    FilhoRoutingModule
  ],
  declarations: [
    PaiComponent,
    FilhoComponent
  ]
})
export class FilhoModule { }
