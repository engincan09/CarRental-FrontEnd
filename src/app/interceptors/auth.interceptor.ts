import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService} from '../services/session-storage.service';

const TokenHeaderKey = "Authorization";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  
  constructor(private tokenService:SessionStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.tokenService.getToken();
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers:request.headers.set(TokenHeaderKey,"Bearer "+token)
    })
    
    return next.handle(newRequest);
  }

}

export const authInterceptorProviders={
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
