import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Otp } from '../pages/otp/otp';
import {OtpService} from '../providers/otp-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
Otp
  ],
  imports: [
    BrowserModule,
    // FormsModule, // if used
    HttpModule,
    // JsonpModule
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Otp
  ],
  providers: [
    StatusBar,
    SplashScreen,OtpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
