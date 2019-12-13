import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;
    API_URL:string="http://localhost:8000";
    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        return this.http.post<any>(`${this.API_URL}/api/user/login`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user ) {
                    console.log(user);
                    // store user details and jwt in cookie
                    this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                }
                return user;
            }));
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    signup(email: string, password: string,name:string) {
        return this.http.post<any>(`${this.API_URL}/api/user/add-User`, { email, password,name })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user ) {
                    console.log(user);
                    this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                }
                return user;
            }));
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
}

