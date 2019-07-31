import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuildPage } from './build.page';

import { CharacterChatPage } from '../character-chat/character-chat.page';
import { WelcomePage } from '../welcome/welcome.page';

const routes: Routes = [
  {
    path: '',
    component: BuildPage
  },
  { path: 'CharacterChatPage', loadChildren: '../character-chat/character-chat.page' },
  { path: 'WelcomePage', loadChildren: '../welcome/welcome.page' },
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
