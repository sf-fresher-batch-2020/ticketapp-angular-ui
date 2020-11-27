import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class BasicAuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
        let token = user != null ? user.token : null;
        if (user && user.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${token}`
                }
            });
        }
        return next.handle(request);
    }
}