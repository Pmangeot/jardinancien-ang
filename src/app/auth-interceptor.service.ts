import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokens = this.authService.getTokens();
    if (tokens) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${tokens.accessToken}`)
      });
      return next.handle(clonedReq);
    }
    return next.handle(req);
  }
}
