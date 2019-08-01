import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CharacterChatPage } from './character-chat.page';
import { TalkPage } from '../talk/talk.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterChatPage
  },
  { path: 'TalkPage', loadChildren: '../talk/talk.page' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CharacterChatPage]
})
export class CharacterChatPageModule {}
