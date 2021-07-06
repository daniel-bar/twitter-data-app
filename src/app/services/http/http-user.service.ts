import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import {
    IGetUserResponse,
    IStoreUsersResponse,
    IGetUsersResponse,
} from 'src/app/models/response';

const ENDPOINT = environment.apiUrl + '/user/';

@Injectable()
export class HttpUserService {

    constructor(private http: HttpClient) { }

    /**
    * Handler for getting users
    * @param usernames usernames field of getting users
    * @returns IStoreUsersResponse Observable
    */
    public storeUsers(usernames: string[]): Observable<IStoreUsersResponse> {
        const baseUrl = ENDPOINT;

        return this.http.post<IStoreUsersResponse>(baseUrl, { usernames });
    }

    /**
    * Handler for getting user
    * @param id id field of getting user
    * @returns IGetUserResponse Observable
    */
    public getUser(id: number): Observable<IGetUserResponse> {
        const baseUrl = ENDPOINT + id;

        return this.http.get<IGetUserResponse>(baseUrl);
    }

    /**
    * Handler for getting users
    * @returns IGetUsersResponse Observable
    */
    public getUsers(): Observable<IGetUsersResponse> {
        const baseUrl = ENDPOINT;

        return this.http.get<IGetUsersResponse>(baseUrl);
    }
}