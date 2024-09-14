import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl: string = environment.api_url + environment.api_login;  // URL pour l'API de login
  private signupUrl = environment.api_url + environment.api_signup; // URL pour l'API d'inscription
  private tokenStorageKey = 'authTokens';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // pour le call API de login, on ne peux pas utiliser de json exceptioonnellement
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<any>(this.loginUrl, body.toString(), { headers })
      .pipe(
        tap(tokens => {
          this.storeTokens(tokens);
        })
      );
  }

  signup(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(this.signupUrl, { firstname, lastname, email, password });
  }

  storeTokens(tokens: { accessToken: string, refreshToken: string }): void {
    localStorage.setItem(this.tokenStorageKey, JSON.stringify(tokens));
  }

  getTokens(): { accessToken: string, refreshToken: string } | null {
    const tokens = localStorage.getItem(this.tokenStorageKey);
    return tokens ? JSON.parse(tokens) : null;
  }

  clearTokens(): void {
    localStorage.removeItem(this.tokenStorageKey);
  }
}
