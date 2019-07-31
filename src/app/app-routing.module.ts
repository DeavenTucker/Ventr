import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'talk', loadChildren: './talk/talk.module#TalkPageModule' },
  { path: 'character-chat', loadChildren: './character-chat/character-chat.module#CharacterChatPageModule' },
  { path: 'record', loadChildren: './record/record.module#RecordPageModule' },
  { path: 'customize', loadChildren: './customize/customize.module#CustomizePageModule' },
  { path: 'animation', loadChildren: './animation/animation.module#AnimationPageModule' },
  { path: 'build', loadChildren: './build/build.module#BuildPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
