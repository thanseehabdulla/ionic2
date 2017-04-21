import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the Otp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class Otp {

  public otp: any;
  otps:any;
  navparam1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
this.navparam1=navParams.get('param1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Otp');
  }


  onLogin(){
  console.log('success');

  let url = 'http://vqtest.southeastasia.cloudapp.azure.com/VraiQueue/service/validateOTP';
  let body = "mobile="+this.navparam1+"&otp="+this.otps+"&user_type=2";
  let head = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
  });

  this.http.post(url, body, {headers : head})
      .map(res =>  res.json())
        .subscribe(data => {
             alert("success"+JSON.stringify(data));
             console.log(data['_body']);
            this.navCtrl.push(Otp);
        }, error => {
             console.log(error);// Error getting the data
        alert("failure"+error['_body']);
          // this.navCtrl.push(Otp);
  }
        //subscribe actions
        );



  }

}
