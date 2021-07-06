import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {
  IGetUserResponse,
  IGetUsersResponse,
} from '../models/response';
import { IUserInterface } from '../models/user.model';

import { HttpUserService } from './http/http-user.service';

@Injectable()
export class UserService {

  constructor(private httpUserService: HttpUserService) { }

  /**
  * handler for users
  * @param usernames usernames field of users form
  * @returns string Observable
  */
  public storeUsers(
    usernames: string[],
  ): Observable<null> {
    return this.httpUserService.storeUsers(
      usernames,
    ).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        let errorMessage: string;

        switch (errorResponse.status) {
          case 400:
          case 406:
            errorMessage = 'Getting users failed';
            break;
          default:
            errorMessage = 'An error occurred';
        }

        return throwError(errorMessage);
      }),
      map(() => null),
    );
  }

  /**
  * Handler for getting user
  * @param id id field of getting user form
  * @returns number Observable
  */
  public getUser(id: number): Observable<
    Pick<IUserInterface, 'username' | 'description' | 'profile_picture_link' | 'following_count' | 'followers_count' | 'most_common_word' | 'retweets_count'>
  > {
    return this.httpUserService.getUser(id)
      .pipe(catchError((errorResponse: HttpErrorResponse) => {
        let errorMessage: string;

        switch (errorResponse.status) {
          case 400:
            errorMessage = 'Getting user failed';
            break;
          default:
            errorMessage = 'An error occurred';
        }

        return throwError(errorMessage);
      }),
        map((response: IGetUserResponse) => response.data),
      );
  }

  /**
  * Handler for getting users
  * @returns object Observable
  */
  public getUsers(): Observable<IUserInterface[]> {
    return this.httpUserService.getUsers()
      .pipe(catchError((errorResponse: HttpErrorResponse) => {
        let errorMessage: string;

        switch (errorResponse.status) {
          case 400:
            errorMessage = 'Getting users failed';
            break;
          default:
            errorMessage = 'An error occurred';
        }

        return throwError(errorMessage);
      }),
        map((response: IGetUsersResponse) => response.data),
      );
  }
}