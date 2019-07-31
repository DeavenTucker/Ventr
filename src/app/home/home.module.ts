import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
//import { WelcomePageModule } from '../welcome/welcome.module';
import { WelcomePage } from '../welcome/welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //WelcomePageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      { path: 'WelcomePage', loadChildren: '../welcome/welcome.page' },
      
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
