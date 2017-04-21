import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OtpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OtpService {
  public data: any;
  constructor(public http: Http) {
    console.log('reachd otp service Provider');
    alert("reached otp service provider");

  }
  postotp() {
      alert("reached otp service provider");
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
    //   this.http.get('path/to/data.json')
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       // we've got back the raw data, now generate the core schedule data
    //       // and save the data for later reference
    //       this.data = data;
    //       resolve(this.data);
    //     });
    // });
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

   let  postParams = {
     'mobile': '9567969610',
     'userType': 'patient'
      //  title: 'foo',
      //  body: 'bar',
      //  userId: 1
     }

     this.http.post("http://vqtest.southeastasia.cloudapp.azure.com/VraiQueue/service/validateUser", postParams, options)
       .subscribe(data => {
         console.log(data['_body']);
alert("success");
        }, error => {
         console.log(error);// Error getting the data
alert("failure");
       });
  });
}
}
