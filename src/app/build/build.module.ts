import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuildPage } from './build.page';
import { AnimationPage } from '../animation/animation.page';
import { WelcomePage } from '../welcome/welcome.page';
import { TalkPage } from '../talk/talk.page'

const routes: Routes = [
  {
    path: '',
    component: BuildPage
  },
  { path: 'AnimationPage', loadChildren: '../animation/animation.page' },
  { path: 'TalkPage', loadChildren: '../talk/talk.page' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuildPage]
})
export class BuildPageModule {}
