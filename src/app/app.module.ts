import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './startgame/landingpage/landingpage.component';
import { GamecodeComponent } from './startgame/gamecode/gamecode.component';


@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent,
    NavbarComponent,
    LandingpageComponent,
    GamecodeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
