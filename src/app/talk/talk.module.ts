import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TalkPage } from './talk.page';
import { RecordPage } from '../record/record.page'

const routes: Routes = [
  {
    path: '',
    component: TalkPage
  },
  { path: 'RecordPage', loadChildren: '../record/record.page' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TalkPage]
})
export class TalkPageModule {}
