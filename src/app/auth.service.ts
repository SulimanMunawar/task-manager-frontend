import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webService: WebRequestService, private router: Router, private http: HttpClient) { }

  // login(email: string, password: string) {
  //   return this.webService.login(email, password).pipe(
  //     shareReplay(),
  //     tap((res: HttpResponse<any>) => {
  //       // the auth tokens will be in the header of this response
  //       this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
  //       console.log("LOGGED IN!");
  //     })
  //   )
  // }



  logout() {
    this.removeSession();
  }

  private setSession(userId: string, accessToken: string | '', refreshToken: string | '') {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

}


