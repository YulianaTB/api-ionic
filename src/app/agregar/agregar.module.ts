import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgregarComponentRoutingModule } from './agregar-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarComponentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AgregarComponent]
})
export class AgregarComponentModule {}
