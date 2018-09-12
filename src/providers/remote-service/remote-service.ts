import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


/*
  Generated class for the RemoteServiceProvider provider.

  See    for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  postList = [];

  constructor(private http: Http) {

  }

  getApiUrl: string = "https://www.vighnhartaservices.com/jsonpages/getHospital";

  // getPosts() {
  //   return this.http.get(this.getApiUrl)
  //     .do((res: Response) => console.log(res.json())
  //       .map((res: Response) => res.json())
  //       .catch(error => console.log(error)));
  // }

  getRemoteData() {
    this.http.get(this.getApiUrl).map(res => res.json()).subscribe(getdata => {
      this.postList = getdata.data;
    });
  }
}
