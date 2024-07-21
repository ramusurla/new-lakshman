import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  postlogin(data:any){
    return this.http.post<any>('http://localhost:5500/user',data)
  }

  getlogin(){
    return this.http.get<any[]>('http://localhost:5500/user')
  }


  isloggedin(){
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      return false;
    }else{
      return true
    }
  }
}
