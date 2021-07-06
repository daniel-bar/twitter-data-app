import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUserInterface } from '../../models/user.model';
import { UserService } from '../user.service';


@Injectable()
export class UserResolver implements Resolve<Pick<IUserInterface, 'username' | 'description' | 'profile_picture_link' | 'following_count' | 'followers_count' | 'most_common_word' | 'retweets_count'>> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pick<IUserInterface, 'username' | 'description' | 'profile_picture_link' | 'following_count' | 'followers_count' | 'most_common_word' | 'retweets_count'>> {
        return this.userService.getUser(+route.paramMap.get('id'));
    }
}