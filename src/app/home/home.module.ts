import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
