import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { LandingpageComponent } from './startgame/landingpage/landingpage.component';
import { GamecodeComponent } from './startgame/gamecode/gamecode.component';

const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'gamecode', component: GamecodeComponent },
  { path: 'styleguide', component: StyleGuideComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}