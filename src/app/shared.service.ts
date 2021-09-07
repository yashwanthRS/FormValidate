import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl="http://localhost:56952/api";

  constructor(private http:HttpClient ) {

  }
  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/Users');
  }

  addUser(val:any){
    return this.http.post(this.APIurl+'/Users',val);
  }

  updateUser(val:any){
    return this.http.put(this.APIurl+'/Users',val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIurl+'/Users/'+val);
  }
  getAllUsers():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/Users/GetAllUserNames');
  }

}
