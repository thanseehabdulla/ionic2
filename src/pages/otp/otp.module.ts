import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Otp } from './otp';

@NgModule({
  declarations: [
    Otp,
  ],
  imports: [
    // IonicModule.forChild(Otp),
  ],
  exports: [
    Otp
  ]
})
export class OtpModule {}
