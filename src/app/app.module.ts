import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequistionsPage } from '../pages/requistions/requistions';
import { TicketsPage } from '../pages/tickets/tickets';
import { ELogPage } from '../pages/e-log/e-log';
import { CollaborationPage } from '../pages/collaboration/collaboration';
import { SettingPage } from '../pages/setting/setting';
import { ManualPage } from '../pages/manual/manual';
import { SignPage } from '../pages/sign/sign';
import { MapPage } from '../pages/map/map';
import { FormControl, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RequistionsPage,
    TicketsPage,
    ELogPage,
    MapPage,
    CollaborationPage,
    SettingPage,
    ManualPage,
    SignPage,
  
  ],
  imports: [
    BrowserModule,FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RequistionsPage,
    TicketsPage,
    ELogPage,
    MapPage,
    CollaborationPage,
    SettingPage,
    ManualPage,
    SignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
