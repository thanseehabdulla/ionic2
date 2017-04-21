import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Otp} from '../otp/otp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})

export class HomePage {
  public otp: any;
number:any;
  constructor(public navCtrl: NavController,public http: Http) {
this.navCtrl=navCtrl;
  }


onLogin(){
console.log('success');

let url = 'http://vqtest.southeastasia.cloudapp.azure.com/VraiQueue/service/validateUser';
let body = "mobile="+this.number+"&userType=patient";
let head = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
});

this.http.post(url, body, {headers : head})
    .map(res =>  res.json())
      .subscribe(data => {
           alert("success"+JSON.stringify(data));
           console.log(data['_body']);
          this.navCtrl.push(Otp,{param1: this.number});
      }, error => {
           console.log(error);// Error getting the data
      alert("failure"+error['_body']);
        // this.navCtrl.push(Otp);
}
      //subscribe actions
      );

}
}
