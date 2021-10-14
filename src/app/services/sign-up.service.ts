import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private url: string = "http://localhost:8080/api/v1/post/user";

  constructor(private http: HttpClient) {
  }

  public createUser(userData: User) {
    return this.http.post<any>(this.url, userData);
  }
}
