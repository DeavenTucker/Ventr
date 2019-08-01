import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecordPage } from './record.page';
import { CharacterChatPage } from '../character-chat/character-chat.page';

const routes: Routes = [
  {
    path: '',
    component: RecordPage
  },
  { path: 'CharacterChatPage', loadChildren: '../character-chat/character-chat.page' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecordPage]
})
export class RecordPageModule {}
