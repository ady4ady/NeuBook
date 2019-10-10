import { Routes } from '@angular/router';

import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {UserProfileComponent} from './UserProfile/userprofile.component';
import { from } from 'rxjs';

export const ComponentsRoutes: Routes = [
 
      {
        path: 'userprofile',
        component: UserProfileComponent,
        data: {
          title: 'User Profile',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Modal' }
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
