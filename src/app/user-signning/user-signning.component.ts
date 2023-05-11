import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signning',
  templateUrl: './user-signning.component.html',
  styleUrls: ['./user-signning.component.css']
})
export class UserSignningComponent implements OnInit {

  email: string = '';
  name: string = "";
  password: string = '';
  streetaddress: string = '';
  city: string = '';
  region: string = '';
  postalcode: string = '';
  usertype: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  userRegister() {
    let bodyData = {
      "email": this.email,
      "name": this.name,
      "password": this.password,
      "streetaddress": this.streetaddress,
      "city": this.city,
      "region": this.city,
      "postalcode": this.postalcode,
      "usertype": this.usertype
    };
    this.http.post("http://localhost:9002/user/create", bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("User Registered Successfully")
      });
  }

  save() {
    this.userRegister();
  }



}
