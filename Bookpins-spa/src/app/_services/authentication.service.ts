import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserDetails } from '../_models/UserDetails';
import { TokenPayload } from '../_models/TokenPayload';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token: string;
  baseUrl = 'http://localhost:3000/api/';
  constructor(private http: HttpClient, private router: Router) {}

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public logout(): void {
    this.token = '';
    localStorage.removeItem('user-token');
    this.router.navigateByUrl('/');
  }

  private readToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('user-token');
    }
    return this.token;
  }

  private saveToken(token: string) {
    localStorage.setItem('user-token', token);
  }

  private request(method: 'post'|'get', type: 'login' | 'register', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`api/${type}`, user);
    }
    else {
      base = this.http.get(`'api/${type}`, { headers: { Authorization: `Bearer ${this.readToken()}`}});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token)
        {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }
}
