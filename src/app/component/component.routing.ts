import { Routes } from '@angular/router';

import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { ButtonsComponent } from './buttons/buttons.component';


export const ComponentsRoutes: Routes = [
 
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent,
        data: {
          title: 'Pagination',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },
      
      {
        path: 'alert',
        component: NgbdAlertBasicComponent,
        data: {
          title: 'Alert',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Alert' }
          ]
        }
      },
     
     
      
      {
        path: 'modal',
        component: NgbdModalBasicComponent,
        data: {
          title: 'Modal',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Modal' }
          ]
        }
      },
     
      {
        path: 'rating',
        component: NgbdratingBasicComponent,
        data: {
          title: 'Rating',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Rating' }
          ]
        }
      },
     
      
     
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Button',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Button' }
          ]
        }
      },
	  
  
];
