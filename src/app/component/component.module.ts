import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { NgbdpaginationBasicComponent } from './pagination/pagination.component';

import { NgbdAlertBasicComponent } from './alert/alert.component';


import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdratingBasicComponent } from './rating/rating.component';

import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
   
    NgbdpaginationBasicComponent,
   
    NgbdAlertBasicComponent,
    
   
   
    NgbdModalBasicComponent,
   
    NgbdratingBasicComponent,
    
    ButtonsComponent,
   
  ]
})
export class ComponentsModule {}
